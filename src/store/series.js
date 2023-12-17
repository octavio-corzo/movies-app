import { defineStore } from "pinia";
import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

export const useSeriesStore = defineStore("series", {
  state: () => ({
    series: [],
  }),
  actions: {
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
  },
});
