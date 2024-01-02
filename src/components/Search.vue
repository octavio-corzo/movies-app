<!-- Search.vue -->

<template>
    <div>
        <a-input-search v-model:value="searchQuery" placeholder="Buscar películas" style="width: 200px"
            @search="handleSearch" />
        <div v-if="searchResults.length > 0">
            <h2>Resultados de la búsqueda:</h2>
            <ul>
                <li v-for="(result, index) in searchResults" :key="index">
                    {{ result.title }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import axios from 'axios';
import router from '../router';

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

let headers = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
};

export default {
    setup() {
        const searchQuery = ref('');
        const searchResults = ref([]);

        const handleSearch = async (searchQuery) => {
            try {
                const response = await axios.get(`${API}search/movie`, {
                    headers,
                    params: {
                        api_key: TOKEN,
                        query: searchQuery,
                    },
                });

                const searchResults = response.data.results;

                // Pasa los resultados de búsqueda a la ruta 'SearchResults'
                router.push({
                    name: 'SearchResults',
                    query: { results: JSON.stringify(searchResults) },
                });

                console.log('Resultados de búsqueda:', searchResults);
            } catch (error) {
                console.error('Error en la búsqueda:', error);
            }
        };

        return {
            searchQuery,
            searchResults,
            handleSearch,
        };
    },
};
</script>
  