<template>
    <a-divider></a-divider>
    <div class="text-container">
        <a-row>
            <a-col :span="18" :push="6">
                <img class="mt-5" style="width: 800px; height: auto;" :src="getImgMovie(this.movie['backdrop_path'])" alt=""
                    cover>
            </a-col>
            <a-col :span="6" :pull="18">
                <img class="ml-5 mt-5" style="width: 240px; height: auto;" :src="getImgMovie(this.movie['poster_path'])"
                    alt="">
            </a-col>
        </a-row>
        <a-typography-title class="ml-5 mt-5" style="color: #FFFF;">{{ this.movie['title'] }}</a-typography-title>
        <div class="container">
            <p class="ml-5" style="padding-bottom: 20px; color: #FFFF;">{{ this.movie['overview'] }}</p>
        </div>
    </div>
    <a-divider></a-divider>
</template>

<script>
import axios from 'axios';
const TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

let headers = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
};

export default {
    data() {
        return {
            movieId: this.$route.params.id,
            movie: {

            },
        }
    },
    created() {
        this.getMovie();
    },
    methods: {
        getMovie() {
            axios.get(`${API}movie/${this.movieId}`, { headers }).then((response) => {
                this.movie = response.data;
                console.log(response.data);
                return this.movie;
            });
        },
        getImgMovie(posterPath) {
            if (posterPath) {
                const baseUrl = 'https://image.tmdb.org/t/p/original';
                return `${baseUrl}${posterPath}`;
            } else {
                return null;
            }
        },
    }
}
</script>

<style lang="scss">
.text-container {
    background-color: rgba(0, 0, 0, 1);
}
</style>