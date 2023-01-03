import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "globalStore",

  state: () => ({
    supabase: null,
  }),

  actions: {
    
  }
});
