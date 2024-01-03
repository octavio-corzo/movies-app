import { defineStore } from "pinia";
import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

let headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

export const useSeriesStore = defineStore("series", {
  state: () => ({
    series: [],
    trendingSeries: [],
    serie: {},
  }),
  actions: {
    async getTrendingSeries() {
      try {
        if (this.trendingSeries.length !== 0) {
          return;
        }
        await axios
          .get(`${API}trending/tv/week`, { headers })
          .then((response) => {
            this.trendingSeries = response.data.results;
            console.log("Tendencias Series", response.data.results);
            return response.data.results;
          });
      } catch (error) {
        console.log(error);
      }
    },
    async getSeries() {
      try {
        if (this.series.length !== 0) {
          return;
        }
        let headers = {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        };

        await axios.get(`${API}discover/tv`, { headers }).then((response) => {
          this.series = response.data.results;
          console.log(response.data.results);
          return response.data.results;
        });
      } catch (error) {}
    },
    async getSerie(id) {
      await axios.get(`${API}tv/${id}`, { headers }).then((response) => {
        this.serie = response.data;
        console.log(response.data);
        return this.serie;
      });
    },
  },
});
