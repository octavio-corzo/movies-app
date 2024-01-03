<template>
    <a-divider></a-divider>
    <search-component />
    <a-divider></a-divider>
    <div class="container">
        <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item, index ) in useMovie.movieDiscover" :key="index"
                style="width: 200px ; height: auto; align-content: center;" :src="getImageUrl(item.backdrop_path)" cover>
            </v-carousel-item>
        </v-carousel>
    </div>
    <a-divider></a-divider>
    <div class="container">
        <a-row>
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
                    <a-menu @click="handleSubmit(item.id)">
                        <a-menu-item style="background-color: #001529; color: #FFFF;" class="text-center">Info</a-menu-item>
                    </a-menu>
                </a-card>

            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import router from "../../router";
import { useMovieStore } from "../../store/movies";
import SearchComponent from "../../components/Search.vue";

const useMovie = useMovieStore()

useMovie.getMovieDiscover();
useMovie.getTrendingMovies();

const handleSubmit = (id) => {
    router.push(`/movie/${id}`);
    console.log(id);
    console.log(useMovie.movie);
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

<style scoped>
.text-container {
    background-color: rgba(0, 0, 0, 0.7);
}

.text-h2,
.text-h5 {
    color: white;
}

.text-h2 {
    font-size: 24px;

}

.text-h5 {
    font-size: 16px;

}
</style>