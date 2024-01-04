<template>
    <a-divider></a-divider>
    <search-component />
    <div class="mt-5 container">
        <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item, index ) in useMovie.movieDiscover" :key="index"
                style="width: 200px ; height: auto; align-content: center;" :src="getImageUrl(item.backdrop_path)" cover>
            </v-carousel-item>
        </v-carousel>
    </div>
    <a-divider></a-divider>
    <a-typography-title>Trending movies</a-typography-title>
    <a-divider></a-divider>
    <div class="container">
        <a-row :gutter="[8, 16]">
            <a-col v-for="(item, index ) in useMovie.trendingMovies" :key="index" :span="8">

                <a-card class="mt-5 mb-5" hoverable style="width: 350px;">
                    <template #cover>
                        <img style="width: 350px; height: auto;" :src="getImageUrl(item.backdrop_path)"
                            alt="Backdrop Image" />
                    </template>
                    <a-card-meta style="text-align: center;" :title="item.title">
                        <template #description>{{ item.release_date }}</template>
                    </a-card-meta>
                </a-card>

            </a-col>
        </a-row>
    </div>
    <a-divider></a-divider>
    <a-typography-title>Trending Series</a-typography-title>
    <div class="container">
        <a-row :gutter="[8, 16]">
            <a-col v-for="(item, index ) in useSerie.trendingSeries" :key="index" :span="8">

                <a-card class="mt-5 mb-5" hoverable style="width: 350px;">
                    <template #cover>
                        <img style="width: 350px; height: auto;" :src="getImageUrl(item.backdrop_path)"
                            alt="Backdrop Image" />
                    </template>
                    <a-card-meta style="text-align: center;" :title="item.name">
                        <template #description>{{ item.release_date }}</template>
                    </a-card-meta>
                </a-card>

            </a-col>
        </a-row>
    </div>
    <a-divider></a-divider>
    <a-typography-title>Trending People</a-typography-title>
    <a-divider></a-divider>
    <div class="container">
        <a-row :gutter="[8, 16]">
            <a-col v-for="(item, index ) in usePeople.trendingPeople" :key="index" :span="8">
                <a-card hoverable class="text-center ml-5 mb-5 mt-5">
                    <a-avatar :src="getImageUrl(item.profile_path)" :size="300" />
                    <a-typography-title class="mt-2 text-center" :level="5">{{ item.name }}</a-typography-title>
                    <a-menu>
                        <a-menu-item @click="handleSubmit(item.id)" style="background-color: #001529; color: #FFFF;"
                            class="mt-2 text-center">
                            More info</a-menu-item>
                    </a-menu>
                </a-card>

            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import router from "../router";
import { useMovieStore } from "../store/movies";
import { useSeriesStore } from "../store/series";
import { usePeopleStore } from "../store/people";
import SearchComponent from "../components/Search.vue";


const useMovie = useMovieStore();
const useSerie = useSeriesStore();
const usePeople = usePeopleStore();

usePeople.getTrendingPeople();
useMovie.getMovieDiscover();
useMovie.getTrendingMovies()
useSerie.getSeries();
useSerie.getTrendingSeries();


const handleSubmit = (id) => {
    router.push(`/person/${id}`);
    console.log(id);
    console.log(usePeople.person);
}


const getImageUrl = (posterPath) => {
    if (posterPath) {
        const baseUrl = 'https://image.tmdb.org/t/p/original';
        return `${baseUrl}${posterPath}`;
    } else {
        return null;
    }
};

</script>
