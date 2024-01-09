import { defineStore } from "pinia";
import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4";

const API = "https://api.themoviedb.org/3/";

let headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

export const useCompaniesStore = defineStore("companies", {
  state: () => ({
    companies: [],
  }),
  actions: {
    async getCompanies() {
      try {
        if (this.companies.length !== 0) {
          return;
        }

        await axios.get(`${API}company`);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
