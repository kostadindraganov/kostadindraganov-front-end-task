import { ActionTree } from 'vuex';
import { EventsState } from '@/types/store/events/index';
import { RootState } from '@/types/store/index';
import { Event } from '@/types/Event';
import { EventsApiFacade } from '@/apiFacade/EventsApiFacade';


export const actions: ActionTree<EventsState, RootState> = {

  async fetchEvents({ commit }): Promise<void> {
    try {
      const events: Event[] = await EventsApiFacade.getAllEvents();
      if (Array.isArray(events) && events.length > 0) {
          commit('setEvents', events);
      }
    } catch (e) {
      throw new Error(`Error on fetch events: ${e}`);
    }
  }
};