import { MutationTree } from 'vuex';
import { EventsState } from '@/types/store/events/index';
import { Event } from '@/types/Event';

export const mutations: MutationTree<EventsState> = {
    setEvents(state, payload: Event[]) {
        state.events = payload;
      },

};
