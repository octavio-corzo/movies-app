<template>
    <div>
        <a-divider></a-divider>
        <div class="text-container">
            <a-row>
                <a-col :span="18" :push="6">
                    <img class="mt-5" style="width: 800px; height: auto;" :src="getImgSerie(serie['backdrop_path'])" alt=""
                        cover />
                </a-col>
                <a-col :span="6" :pull="18">
                    <img class="ml-5 mt-5" style="width: 240px; height: auto;" :src="getImgSerie(serie['poster_path'])"
                        alt="" />
                </a-col>
            </a-row>
            <a-typography-title class="ml-5 mt-5" style="color: #FFFF;">{{ serie['name'] }}</a-typography-title>
            <div class="container">
                <p class="ml-5" style="padding-bottom: 20px; color: #FFFF;">{{ serie['overview'] }}</p>
            </div>
        </div>
        <a-divider></a-divider>
        <div class="container">
            <v-carousel>
                <v-carousel-item v-for="(item, index) in serie.images" :key="index" style="height: auto;">
                    <img :src="getImageUrl(item.file_path)" alt="" style="width: 100%;" />
                </v-carousel-item>
            </v-carousel>
        </div>
        <a-divider></a-divider>
        <a-typography-title class="ml-5" :level="2">Similar series:</a-typography-title>
        <a-divider></a-divider>
        <a-row :gutter="[48, 32]">
            <a-col v-for="(item, index) in serie.similar" :key="index" :span="6">
                <a-card class="mt-5 mb-5" hoverable style="width: 240px; height: auto;">
                    <template #cover>
                        <img @click="handleSubmit(item.id)" style="width: 240px; height: auto;"
                            :src="getActorImageUrl(item.poster_path)" alt="Profile image" />
                    </template>
                    <a-card-meta @click="handleSubmit(item.id)" style="text-align: center;" :title="item.original_title">
                        <template #title>{{ item.name }}</template>
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
            serieId: this.$route.params.id,
            serie: {
                images: [],
                cast: [],
                reviews: [],
            },
        };

    },
    created() {
        this.getSerie();
    },
    methods: {
        getSerie() {
            axios.get(`${API}tv/${this.serieId}`, { headers }).then((response) => {
                this.serie = response.data;
                this.getImages();
                this.getCast();
                this.getSimilarSerie();
            });
        },
        getSimilarSerie() {
            const url = `${API}tv/${this.serieId}/similar`;
            axios.get(url, { headers }).then((response) => {
                this.serie.similar = response.data.results;
            });
        },
        getImages() {
            const url = `${API}tv/${this.serieId}/images`;
            axios.get(url, { headers }).then((response) => {
                this.serie.images = response.data.backdrops;
            });
        },
        getImgSerie(posterPath) {
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
        getActorImageUrl(profilePath) {
            if (profilePath) {
                const baseUrl = 'https://image.tmdb.org/t/p/original';
                return `${baseUrl}${profilePath}`;
            } else {
                return null;
            }
        },
        getCastSerie(id) {
            const url = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;
            return url;
        },
        getCast() {
            const castUrl = this.getCastSerie(this.serieId);
            axios.get(castUrl, { headers }).then((response) => {
                this.serie.cast = response.data.cast;
            });
        },
    },
}


</script>

<style lang="scss" scoped></style>