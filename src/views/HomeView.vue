<template>
    <div arrows dots-class="slick-dots slick-thumb" v-for="(item, index ) in useMovie.movieDiscover" :key="index">
        <img style="width: 500px; height: auto;" :src="getImageUrl(item.backdrop_path)" alt="Backdrop Image" />
    </div>
</template>

<script setup>
import { useMovieStore } from "../store/movies";

const useMovie = useMovieStore()

useMovie.getMovieDiscover();

const getImageUrl = (backdropPath) => {
    if (backdropPath) {
        const baseUrl = 'https://image.tmdb.org/t/p/original';
        return `${baseUrl}${backdropPath}`;
    } else {
        return null;
    }
};

</script>


