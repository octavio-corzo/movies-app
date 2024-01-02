// store/search.js
import { defineStore } from "pinia";

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    searchResults: [],
  }),
  actions: {
    setSearchResults(results) {
      this.searchResults = results;
    },
  },
});
