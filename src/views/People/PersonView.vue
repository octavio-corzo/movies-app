<template>
    <a-row>
        <a-col>
            <a-card class="mt-5" hoverable style="width: 240px; height: auto ;">
                <template #cover>
                    <img alt="example" style="width: 240px; height: auto;"
                        :src="getActorImageUrl(this.person['profile_path'])" />
                </template>
            </a-card>
        </a-col>
        <a-col>
            <a-typography-title :level="2" class="ml-5 mt-5">{{ this.person['name'] }}</a-typography-title>
            <!-- <a-typography-paragraph class="ml-5 mt-5" :content="this.person['also_known_as']"></a-typography-paragraph> -->
            <a-typography-paragraph class="ml-5 mt-5">Birthday: {{ this.person['birthday'] }}</a-typography-paragraph>
            <a-typography-paragraph class="ml-5 mt-5">Gender: {{ this.person['gender'] == 2 ? 'Male' :
                'Female' }}</a-typography-paragraph>
        </a-col>
        <a-col>
            <a-typography-title :level="2" class="mt-5">Biography</a-typography-title>

            <a-typography-paragraph :title="this.person['name']" class="mt-5"
                :content="this.person['biography']"></a-typography-paragraph>
        </a-col>

    </a-row>
</template>

<script>
import axios from 'axios';


const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

const headers = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
};


export default {
    data() {
        return {
            personId: this.$route.params.id,
            person: {}
        }
    },
    created() {
        this.getPerson();
    },
    methods: {
        getPerson() {
            axios.get(`${API}person/${this.personId}`, { headers }).then((response) => {
                this.person = response.data;
            })
        },
        getActorImageUrl(profilePath) {
            if (profilePath) {
                const baseUrl = 'https://image.tmdb.org/t/p/original';
                return `${baseUrl}${profilePath}`;
            } else {
                return null;
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>