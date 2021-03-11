import { mapGetters, mapActions } from "vuex";

export default {
    name: "signup",
    data() {
        return {
            login: '',
            password: '',
            confirm_password: '',
            phone_num: ''
        }
    },
    computed: {
        ...mapGetters(["GET_USER", "GET_USERS"])
    },
    methods: {
        ...mapActions(["SIGN_UP", "LOGIN"]),
        sendForm() {
            if (this.login.trim().length <= 3 || this.password.trim().length <= 3 || this.confirm_password.trim().length <= 3) {
                return console.log("Login and password must be over then 3 symbol");
            } else if (this.password.trim() !== this.confirm_password.trim()) {
                return console.log("Password not simillar");
            } else if (this.phone_num.match(/[a-z]/gi) && this.phone_num.match(/[a-z]/gi).length) {
                return console.log("Phone number must be have only numbers");
            }

            const contacts = this.GET_USERS.map(user => {
                console.log(user);
                return {
                    name: user.login,
                    tel:user.phone_num
                }
            });
            const user = {
                login: this.login,
                password: this.password,
                phone_num: this.phone_num,
                contacts
            };
            this.SIGN_UP(user);
            this.$router.push({ name: "/" })
        }
    }
}