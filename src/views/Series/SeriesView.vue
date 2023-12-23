<template>
    <a-divider></a-divider>

    <div>
        <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item, index ) in useSeries.series" :key="index" style="width:150 ; height: auto;"
                :src="getImageUrl(item.backdrop_path)" cover>
            </v-carousel-item>
        </v-carousel>
    </div>
    <a-divider></a-divider>
    <a-row>
        <a-col v-for="(item, index ) in useSeries.series" :key="index" :xs="{ span: 5, offset: 1 }"
            :lg="{ span: 6, offset: 2 }">

            <a-card class="mt-5 mb-5" hoverable style="width: 240px">
                <template #cover>
                    <img style="width: 240px; height: auto;" :src="getImageUrl(item.poster_path)" alt="Backdrop Image" />
                </template>
                <a-card-meta style="text-align: center;" :title="item.original_name">
                    <template v-if="item.vote_average > 5" style="color: green;" #description>{{ item.vote_average
                    }}</template>
                </a-card-meta>
                <a-menu @click="handleSubmit(item.id)">
                    <a-menu-item style="background-color: #001529; color: #FFFF;" class="text-center">Info</a-menu-item>
                </a-menu>
            </a-card>

        </a-col>
    </a-row>
</template>

<script setup>
import { useSeriesStore } from "../../store/series";
import router from "../../router";
const useSeries = useSeriesStore()

useSeries.getSeries();

const getImageUrl = (posterPath) => {
    if (posterPath) {
        const baseUrl = 'https://image.tmdb.org/t/p/original';
        return `${baseUrl}${posterPath}`;
    } else {
        return null;
    }
};

const handleSubmit = (id) => {
    router.push(`/serie/${id}`)
}

</script>
