<template>
    <a-divider></a-divider>
    <h2>Resultados de la búsqueda:</h2>
    <a-divider></a-divider>
    <div class="container">
        <a-row>
            <a-col v-for="(item, index ) in searchResults" :key="index" :xs="{ span: 5, offset: 1 }"
                :lg="{ span: 6, offset: 2 }">

                <a-card class="mt-5 mb-5" hoverable style="width: 240px">
                    <template #cover>
                        <img style="width: 240px; height: auto;" :src="getImageUrl(item.poster_path)"
                            alt="Backdrop Image" />
                    </template>
                    <a-card-meta style="text-align: center;" :title="item.title">
                        <template #description>{{ }}</template>
                    </a-card-meta>
                    <a-menu @click="handleSubmit(item)">
                        <a-menu-item style="background-color: #001529; color: #FFFF;" class="text-center">Info</a-menu-item>
                    </a-menu>
                </a-card>

            </a-col>
        </a-row>
    </div>
</template>
  
<script>
import router from "../router";

export default {
    data() {
        return {
            searchResults: [],
        };
    },
    created() {
        // Recupera los resultados de búsqueda de la ruta
        const results = this.$route.query.results;
        this.searchResults = JSON.parse(results);
    },
    methods: {
        getImageUrl(posterPath) {
            if (posterPath) {
                // Construye la URL de la imagen utilizando la base de la URL de imágenes de TMDb
                const baseUrl = 'https://image.tmdb.org/t/p/w500'; // Puedes ajustar el tamaño según tus necesidades
                return `${baseUrl}${posterPath}`;
            } else {
                return null;
            }
        },
        handleSubmit(item) {
            if (item.media_type === "movie") {
                router.push(`/movie/${item.id}`);
            } else if (item.media_type === 'tv') {
                router.push(`/serie/${item.id}`);
            }
        }
    },
}
</script>
