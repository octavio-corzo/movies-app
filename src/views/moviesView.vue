<template>
    <a-divider></a-divider>
    <div class="container">
        <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item, index ) in useMovie.movieDiscover" :key="index"
                style="width: 200px ; height: auto; align-content: center;" :src="getImageUrl(item.backdrop_path)" cover>

                <!-- <div class="mb-20 text-container">
                    <div class="mb-20 text-h2">
                        {{ item.title }}
                    </div>
                    <div class="text-h5">
                        {{ item.overview }}
                    </div>
                </div> -->
            </v-carousel-item>
        </v-carousel>
    </div>
    <a-divider></a-divider>
    <div class="container">
        <v-row>
            <a-col v-for="(item, index ) in useMovie.movieDiscover" :key="index" :xs="{ span: 5, offset: 1 }"
                :lg="{ span: 6, offset: 2 }">

                <a-card class="mt-5 mb-5" hoverable style="width: 240px">
                    <template #cover>
                        <img style="width: 240px; height: auto;" :src="getImageUrl(item.poster_path)"
                            alt="Backdrop Image" />
                    </template>
                    <a-card-meta style="text-align: center;" :title="item.title">
                        <template #description>{{ }}</template>
                    </a-card-meta>
                </a-card>

            </a-col>
        </v-row>
    </div>
</template>

<script setup>
import { useMovieStore } from "../store/movies";

const useMovie = useMovieStore()

useMovie.getMovieDiscover();

const getImageUrl = (posterPath) => {
    if (posterPath) {
        const baseUrl = 'https://image.tmdb.org/t/p/original';
        return `${baseUrl}${posterPath}`;
    } else {
        return null;
    }
};
</script>

<style scoped>
.text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
}

.text-h2,
.text-h5 {
    color: white;
}

.text-h2 {
    font-size: 24px;
    /* Tamaño de fuente para el texto h2 /
margin-bottom: 5px; / Espacio entre los dos textos */
}

.text-h5 {
    font-size: 16px;
    /* Tamaño de fuente para el texto h5 */
}
</style>