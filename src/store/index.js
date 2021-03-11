import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [],
        loginedUser: null
    },
    getters: {
        GET_USERS: (state) => state.users,
        GET_USER: (state) => state.loginedUser
    },
    mutations: {
        LOAD_USERS: (state, payload) => state.users = payload,
        LOGIN: (state, payload) => state.loginedUser = payload,
        SIGN_UP: (state, payload) => {
            state.users = [...state.users, payload];
            state.loginedUser = payload;
        },
        EXIT: (state, payload) => state.loginedUser = null,
        REMOVE_PHONE: (state, payload) => {
            state.loginedUser = {
                ...state.loginedUser,
                contacts: state.loginedUser.contacts.filter(contact => contact != payload.contact)
            };
            state.users[
                state.users.findIndex(user=>user.login === payload.login)
            ].contacts = state.loginedUser.contacts;
        },
        CHANGE_PHONE: (state,payload)=>{
            const index = state.loginedUser.contacts.findIndex(contact=>contact.name==payload.modifiedPhoneUserLogin);
            const find = state.loginedUser.contacts.find(contact=>contact.name==payload.modifiedPhoneUserLogin);
            Vue.set(state.loginedUser.contacts, index, {...find, tel: payload.phone});
        },
        ADD_CONTACT: (state,payload)=>{
            const {phone,name} = payload;
            state.loginedUser.contacts = [...state.loginedUser.contacts, {
                name,
                tel: phone
            }]
        }
    },
    actions: {
        LOAD_USERS: (ctx, payload) => ctx.commit("LOAD_USERS", payload),
        LOGIN: (ctx, payload) => ctx.commit("LOGIN", payload),
        SIGN_UP: (ctx, payload) => ctx.commit("SIGN_UP", payload),
        EXIT: (ctx, payload) => ctx.commit("EXIT"),
        REMOVE_PHONE: (ctx, payload) => ctx.commit("REMOVE_PHONE", payload),
        CHANGE_PHONE: (ctx,payload)=>ctx.commit("CHANGE_PHONE", payload),
        ADD_CONTACT:(ctx,payload)=>ctx.commit("ADD_CONTACT",payload)
    }
});