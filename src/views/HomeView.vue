<template>
    <a-divider></a-divider>
    <!-- <div style="text-align: left;" class="mb-5 text-h2">
        Welcome
    </div> -->
    <!-- <div class="container">
        <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item, index ) in useSerie.series" :key="index"
                style="width: 200px ; height: auto; align-content: center;" :src="getImageUrl(item.backdrop_path)" cover>
            </v-carousel-item>
        </v-carousel>
    </div>
    <a-divider></a-divider> -->
    <div class="container">
        <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item, index ) in useMovie.movieDiscover" :key="index"
                style="width: 200px ; height: auto; align-content: center;" :src="getImageUrl(item.backdrop_path)" cover>
            </v-carousel-item>
        </v-carousel>
    </div>
    <a-divider></a-divider>
    <div class="container">
        <a-row :gutter="[8, 16]">
            <a-col v-for="(item, index ) in useMovie.movieDiscover" :key="index" :span="8">

                <a-card class="mt-5 mb-5" hoverable style="width: 450px;">
                    <template #cover>
                        <img style="width: 450px; height: auto;" :src="getImageUrl(item.backdrop_path)"
                            alt="Backdrop Image" />
                    </template>
                    <a-card-meta style="text-align: center;" :title="item.title">
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

const useMovie = useMovieStore();
const useSerie = useSeriesStore();

useMovie.getMovieDiscover();
useSerie.getSeries();

const getImageUrl = (posterPath) => {
    if (posterPath) {
        const baseUrl = 'https://image.tmdb.org/t/p/original';
        return `${baseUrl}${posterPath}`;
    } else {
        return null;
    }
};

</script>
