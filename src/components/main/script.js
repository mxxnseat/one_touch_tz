import {mapActions, mapGetters} from "vuex";

import modal from "../modal/index.vue";

export default {
    name: "signin",
    data: ()=>( {
        login: '',
        password: '',
        addForm: {
            phone: '',
            name: ''
        }
    }),
    components: {
        modal
    },
    computed:{
        ...mapGetters(["GET_USERS", "GET_USER"]),
    },
    methods: {
        ...mapActions(["LOGIN", "LOAD_USERS", "REMOVE_PHONE", "ADD_CONTACT"]),
        sendForm(){
            if(this.login.trim().length <=3 || this.password.trim().length <=3 ){
                return console.log("Login and password must be over then 3 symbol");
            }
            const user = this.GET_USERS.find(user=>{
                return user.login == this.login && user.password == this.password;
            });

            if(user){
                this.LOGIN(user);
                this.login = '';
                this.password = '';
            }else{
                console.log("user not found. Check password or login");
            }
        },
        removePhone(userLogin, contact){
            this.REMOVE_PHONE({login: userLogin, contact});
        },
        openModal(user){
            this.$refs.modal.show = true;
            this.$refs.modal.name = user.name;
            this.$refs.modal.phoneNum = user.tel;
        },
        addContact(){
            const user = this.GET_USER;
            if(this.addForm.phone.match(/[a-z]/gi) && this.addForm.phone.match(/[a-z]/gi).length){
                return console.log("User phone num must be have only number symbols");
            }
            
            this.ADD_CONTACT({
                loginedUser: user,
                name: this.addForm.name,
                phone: this.addForm.phone
            });

            this.addForm.name = this.addForm.phone = '';
        }
    }
}