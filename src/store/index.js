import { createStore } from 'vuex';
import juegos from './juegos.json';

export default createStore({
  state: {
    juegos,
  },
  getters: {
  },
  mutations: {
    setJuegos(state, juegos){
      state.juegos = juegos;
    }
  },
  actions: {
    incrementar({commit, state}, index){
      const { juegos } = state;
      juegos[index].stock++;
      commit('setJuegos', juegos);
    },
    disminuir({commit, state}, index){
      const {juegos} = state;
      juegos[index].stock--;
      commit('setJuegos', juegos);
    }
  },
  modules: {
  }
})
