<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Id
                </th>
                <th class="text-left">
                    Name
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index ) in useMovie.movieGenres" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
import { useMovieStore } from "../store/movies";

const useMovie = useMovieStore()

useMovie.getMovieGenres();


</script>

<style lang="scss" scoped></style>