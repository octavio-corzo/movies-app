// Importa las dependencias necesarias
import { defineStore } from "pinia";
import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

// Define el store de Pinia
export const useMovieStore = defineStore("movies", {
  state: () => ({
    movieGenres: [],
    movieDiscover: [],
    imgMovieDiscover: [],
  }),
  actions: {
    async getMovieGenres() {
      try {
        if (this.movieGenres.length !== 0) {
          return;
        }
        let headers = {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        };

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
        let headers = {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        };

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
    async getImgMovieDiscover() {
      try {
        if (this.imgMovieDiscover.length !== 0) {
          return;
        }
        let headers = {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        };

        await axios
          .get(`${API}discover/movie`, { headers })
          .then((response) => {
            this.movieDiscover = response.data.results.backdrop_path;
            console.log(response.data.results.backdrop_path);
            return response.data.results.backdrop_path;
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
