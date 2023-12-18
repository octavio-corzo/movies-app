import { defineStore } from "pinia";
import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

let headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

export const useMovieStore = defineStore("movies", {
  state: () => ({
    movieGenres: [],
    movieDiscover: [],
    movie: {},
  }),
  actions: {
    async getMovieGenres() {
      try {
        if (this.movieGenres.length !== 0) {
          return;
        }
        await axios
          .get(`${API}genre/movie/list`, { headers })
          .then((response) => {
            this.movieGenres = response.data.genres;
            return response.data.genres;
          });
      } catch (error) {
        console.error("Error:", error);
      }
    },
    async getMovieDiscover() {
      try {
        if (this.movieDiscover.length !== 0) {
          return;
        }
        await axios
          .get(`${API}discover/movie`, { headers })
          .then((response) => {
            this.movieDiscover = response.data.results;
            console.log(response.data.results);
            return response.data.results;
          });
      } catch (error) {
        console.log(error);
      }
    },
    async getMovie(id) {
      await axios.get(`${API}movie/${id}`, { headers }).then((response) => {
        this.movie = response.data;
        console.log(response.data);
        return this.movie;
      });
    },
  },
});
