import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { EventsState } from '@/types/store/events/index';
import { RootState } from '@/types/store/index';


const namespaced = true;

export const events: Module<EventsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};