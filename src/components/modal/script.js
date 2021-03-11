import { mapActions, mapGetters } from "vuex";

export default {
    name: "modal",
    data(){
        return {
            show: false,
            name: '',
            phoneNum: ''
        }
    },
    computed:{
        ...mapGetters(['GET_USER'])
    },
    methods:{
        ...mapActions(['CHANGE_PHONE']),
        close(){
            this.show = false;
            this.name = '';
            this.phoneNum = '';
        },
        changePhone(){
            this.CHANGE_PHONE({
                login: this.GET_USER.login,
                modifiedPhoneUserLogin: this.name,
                phone: this.phoneNum,
            });
            this.show = false;
        }
    }
}