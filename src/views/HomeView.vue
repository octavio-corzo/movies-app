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
</template>

<script setup>
import { useMovieStore } from "../store/movies";
import { useSeriesStore } from "../store/series";
import SearchComponent from "../components/Search.vue";


const useMovie = useMovieStore();
const useSerie = useSeriesStore();

useMovie.getMovieDiscover();
useMovie.getTrendingMovies()
useSerie.getSeries();
useSerie.getTrendingSeries();

const getImageUrl = (posterPath) => {
    if (posterPath) {
        const baseUrl = 'https://image.tmdb.org/t/p/original';
        return `${baseUrl}${posterPath}`;
    } else {
        return null;
    }
};

</script>
