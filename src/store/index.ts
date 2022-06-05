import Vue from 'vue';
import Vuex from 'vuex';
import { events } from './events/index';

export interface RootState {
	version: string;
}

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.1',
  },
  modules: {
    events,
  },
  mutations: {

  },
  actions: {

  },
});
