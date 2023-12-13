import { createStore } from "vuex";
import drivers from "@/store/modules/drivers";
import buses from "@/store/modules/buses";
import appointment from "@/store/modules/appointment";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    drivers,
    buses,
    appointment,
  },
});
