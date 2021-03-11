import axios from "axios";

import { mapActions, mapGetters } from "vuex";

export default {
    name: "App",
    computed: {
        ...mapGetters(["GET_USER"])
    },
    mounted() {
        axios.get("/db.json").then(({ data }) => {
            this.LOAD_USERS(data);
        });
    },
    methods: {
        ...mapActions(["EXIT", "LOAD_USERS"]),
        exit() {
            this.EXIT();
        }
    }
}