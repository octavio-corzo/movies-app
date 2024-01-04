import { defineStore } from "pinia";
import axios from "axios";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

let headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

export const usePeopleStore = defineStore("people", {
  state: () => ({
    trendingPeople: [],
    person: {},
  }),
  actions: {
    async getPerson(id) {
      await axios.get(`${API}person/${id}`, { headers }).then((response) => {
        this.person = response.data;
        console.log(response.data);
        return this.person;
      });
    },
    async getTrendingPeople() {
      try {
        if (this.trendingPeople.length != 0) {
          return;
        }
        axios
          .get(`${API}trending/person/week`, { headers })
          .then((response) => {
            this.trendingPeople = response.data.results;
            console.log("Trending people", response.data.results);
            return response.data.results;
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
