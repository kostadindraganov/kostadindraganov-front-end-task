import { GetterTree } from 'vuex';
import { EventsState } from '@/types/store/events/index';
import { RootState } from '@/types/store/index';
import { Event } from '@/types/Event';

export const getters: GetterTree<EventsState, RootState> = {
    getEvents(state): Event[] {
      const { events }: EventsState = state;
      
      return events
    },
};