<template>
    <div>
        <h1>{{ serie['name'] }}</h1>
    </div>
</template>

<script>
import axios from 'axios';
import router from "../../router";



const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

const headers = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
};

export default {
    data() {
        return {
            serieId: this.$route.params.id,
            serie: {},
        };

    },
    created() {
        this.getSerie();
    },
    methods: {
        getSerie() {
            axios.get(`${API}tv/${this.serieId}`, { headers }).then((response) => {
                this.serie = response.data;
            });
        }
    }

}

</script>

<style lang="scss" scoped></style>