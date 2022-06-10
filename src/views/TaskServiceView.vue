<template>
  <main class="container flex flex-col items-center mb-10">
    <h1>Jiminny Calendar</h1>

    <section 
      class="w-100 bg-gray-100 relative  border-l-2 border-l-slate-200 box-border"
      :style="tableHeight"
    >
      <div class="relative mx-2.5">
        <ul>
          <li v-for="(event, index) in eventsBox" :key="index">
            <event-box :event="event" class="animate-fade-in-up animation-delay-200"/>
          </li>
        </ul> 
      </div>    
 
      <div class="absolute -top-35 -left-70">
        <ul>
          <li v-for="(item, index) in allTimeFrames" :key="index">
            <div class="h-15.5 flex justify-center items-center">
              <div class="text-right w-16">
                <span class="text-lg text-slate-500 mr-2">{{item}}</span>
              </div>
              <i class="w-101 border-slate-200 border-t-2 border-dotted flex-1"></i>
            </div>
            
          </li>
        </ul>
       </div>
    </section>
    
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import moment from 'moment'

import Row from '@/components/Row.vue'; 
import EventBox from '@/components/EventBox.vue';
import timeFrame from '@/constants/timeFrame';

import { Event } from '@/types/Event';

import {getEventTransformInstance, EventTransformServiceType} from '@/services/EventTransform';
// import EventTransform from '@/services/EventTransform';

import { EventsBox } from '@/types/EventsBox';


const namespace = 'events';

@Component({
  components: {
    Row,
    EventBox
  },
})
export default class TaskServiceView extends Vue {
  @Action('fetchEvents', { namespace })
  fetchEvents!: () => Promise<Event[]>;
/* eslint-disable @typescript-eslint/no-explicit-any */

  @Getter('getEvents', { namespace })
  getEvents!: any;

  eventsBox: EventsBox[] = [];

  get allTimeFrames(): string[] {
    if (Array.isArray(timeFrame) && timeFrame.length > 0) {
      return timeFrame.map((item: number) => moment.unix(item).utcOffset('+0300').format('h A'));
    }
    return [];
  }

  get lastItem() {
    return this.allTimeFrames.length - 1;
  }

  get tableHeight(): string {
    return timeFrame ? `height:${(timeFrame.length -1) * 60}px` : 'height:0px';
  }

  async created() {
    await this.fetchEvents();
    const eventManager: EventTransformServiceType = getEventTransformInstance(720, 24, this.getEvents)
    this.eventsBox = eventManager.getAllTransformedEvents()
    
    // const EventTransformService = new EventTransform(720, 24, this.getEvents);
    // this.eventsBox = EventTransformService.getAllTransformedEvents();
  }
}
</script>
