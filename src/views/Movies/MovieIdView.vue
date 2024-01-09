<template>
    <div>
        <a-divider></a-divider>
        <a-row>
            <a-col :flex="3">
                <img class="mt-5" style="width: 800px; height: auto;" :src="getImgMovie(movie['backdrop_path'])" alt=""
                    cover />
            </a-col>
            <a-col :flex="2">
                <img class="ml-5 mt-5" style="width: 240px; height: auto;" :src="getImgMovie(movie['poster_path'])"
                    alt="" />
            </a-col>
        </a-row>
        <div class="text-container">
            <a-typography-title class="mt-5 mr-5" style="color: #FFFF;">{{ movie['title'] }}</a-typography-title>
            <div class="container">
                <p class="ml-5" style="padding-bottom: 20px; color: #FFFF;">{{ movie['overview'] }}</p>
            </div>
        </div>
        <a-divider></a-divider>
        <div class="container">
            <v-carousel>
                <v-carousel-item v-for="(item, index) in movie.images" :key="index" style="height: auto;">
                    <img :src="getImageUrl(item.file_path)" alt="" style="width: 100%;" />
                </v-carousel-item>
            </v-carousel>
        </div>
        <a-divider></a-divider>
        <a-typography-title :level="2">Cast:</a-typography-title>
        <a-divider></a-divider>
        <a-row :gutter="[48, 32]">
            <a-col v-for="(item, index) in movie.cast" :key="index" :span="6">
                <a-card v-if="!item.profile_path" class="mt-5 mb-5" hoverable style="width: 240px">
                    <template #cover>
                        <img style="width: 240px; height: auto;" src="../../assets/images/avatar.png" alt="Profile image" />
                    </template>
                    <a-card-meta style="text-align: center;" :title="item.name">
                        <template #description>{{ }}</template>
                    </a-card-meta>
                </a-card>
                <a-card v-else class="mt-5 mb-5" hoverable style="width: 240px; height: auto;">
                    <template #cover>
                        <img style="width: 240px; height: auto;" :src="getActorImageUrl(item.profile_path)"
                            alt="Profile image" />
                    </template>
                    <a-card-meta style="text-align: center;" :title="item.name">
                        <template #description>{{ item.character }}</template>
                    </a-card-meta>
                </a-card>
            </a-col>
        </a-row>
        <a-divider></a-divider>
        <a-typography-title class="ml-5" :level="2">Similar movies:</a-typography-title>
        <a-divider></a-divider>
        <a-row :gutter="[48, 32]">
            <a-col v-for="(item, index) in movie.similar" :key="index" :span="6">
                <a-card class="mt-5 mb-5" hoverable style="width: 240px; height: auto;">
                    <template #cover>
                        <img @click="handleSubmit(item.id)" style="width: 240px; height: auto;"
                            :src="getActorImageUrl(item.poster_path)" alt="Profile image" />
                    </template>
                    <a-card-meta @click="handleSubmit(item.id)" style="text-align: center;" :title="item.original_title">
                        <template #description>{{}}</template>
                    </a-card-meta>
                    <!-- <a-menu @click="handleSubmit(item.id)">
                        <a-menu-item style="background-color: #001529; color: #FFFF;" class="text-center">Info</a-menu-item>
                    </a-menu> -->
                </a-card>
            </a-col>
        </a-row>
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
            movieId: this.$route.params.id,
            movie: {
                images: [],
                cast: [],
                reviews: [],
                similar: [],
            },
        };
    },
    created() {
        this.getMovie();
    },
    methods: {
        getMovie() {
            axios.get(`${API}movie/${this.movieId}`, { headers }).then((response) => {
                this.movie = response.data;
                this.getImages();
                this.getCast();
                this.getReviews();
                this.getSimilarMovie();
            });
        },
        getSimilarMovie() {
            const url = `${API}movie/${this.movieId}/similar`;
            axios.get(url, { headers }).then((response) => {
                this.movie.similar = response.data.results;
            });
        },
        getImages() {
            const url = `${API}movie/${this.movieId}/images`;
            axios.get(url, { headers }).then((response) => {
                this.movie.images = response.data.backdrops;
            });
        },
        getCast() {
            const castUrl = this.getCastMovie(this.movieId);
            axios.get(castUrl, { headers }).then((response) => {
                this.movie.cast = response.data.cast;
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
        getImageUrl(filePath) {
            if (filePath) {
                const baseUrl = 'https://image.tmdb.org/t/p/original';
                return `${baseUrl}${filePath}`;
            } else {
                return null;
            }
        },
        getCastMovie(id) {
            const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
            return url;
        },
        getActorImageUrl(profilePath) {
            if (profilePath) {
                const baseUrl = 'https://image.tmdb.org/t/p/original';
                return `${baseUrl}${profilePath}`;
            } else {
                return null;
            }
        },
        getReviews() {
            const url = `${API}movie/${this.movieId}/reviews`;
            axios.get(url, { headers }).then((response) => {
                this.movie.reviews = response.data.results;
            })
        },
        handleSubmit(id) {
            router.push(`/movie/${id}`);
        }
    },
};
</script>


<style lang="scss">
.text-container {
    background-color: rgba(0, 0, 0, 1);
}
</style>
  