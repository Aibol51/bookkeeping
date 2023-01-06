import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
    id: "globalStore",

    state: () => ({
        showAddMenu: false,
        showKeyBoard: false,
    }),

    actions: {
        setShowAddMenu(show) {
            this.showAddMenu = show;
        },
        setShowKeyBoard(show) {
            this.showKeyBoard = show;
        }
    },
});
