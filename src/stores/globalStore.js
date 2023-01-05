import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
    id: "globalStore",

    state: () => ({
        showAddMenu: false,
    }),

    actions: {
        setShowAddMenu(show) {
            this.showAddMenu = show;
        },
    },
});
