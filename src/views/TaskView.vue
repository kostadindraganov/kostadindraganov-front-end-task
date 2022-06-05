<template>
  <main class="container flex flex-col items-center mb-10">
    <h1>Jiminny Calendar</h1>

    <section>
      <div class="relative mx-3">
        <ul>
          <li v-for="(event, index) in eventsBox" :key="index">
            <event-box :event="event" class="animate-fade-in-up animation-delay-200"/>
          </li>
        </ul> 
      </div>    
      <ul>
        <li v-for="(item, index) in allTimeFrames" :key="index">
         <row :title="item" :isLast="lastItem === index"/>
        </li>
      </ul>
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
import { Events } from '@/types/Events';

const namespace = 'events';

@Component({
  components: {
    Row,
    EventBox
  },
})
export default class TaskView extends Vue {
  @Action('fetchEvents', { namespace })
  fetchEvents!: () => Promise<Event[]>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  @Getter('getEvents', { namespace })
  getEvents!: any;

  width = 720;

  height = 840; 

  tableWidth = 696;

  endOfEvent = 0;

  eventsBox: Events[] = [];

  get allTimeFrames(): string[] {
    return timeFrame.map((item: number) => moment.unix(item).utcOffset('+0300').format('h A'));
  }

  get lastItem() {
    return this.allTimeFrames.length - 1;
  }

  created() {
    this.getAllEvents()
  }

 async getAllEvents(): Promise<void> {
    await this.fetchEvents();

    if (Array.isArray(this.getEvents) && this.getEvents.length > 0) {
      this.sortEvents();
      this.calcPosition();
    }
  }

  sortEvents(): void {
    const events = this.getEvents.sort((first: Event,last: Event) => {
      if(first.startTime > last.startTime) { return 1; }
      if(first.startTime < last.startTime) { return -1; }
      return 0;
    });

    const transformedEvents: Events[] = events.map((item: Event) => 
      Object.assign(item, {
        height: item.endTime - item.startTime,
        top: item.startTime
      })
    )

    this.eventsBox = transformedEvents;
  }

  checkOverlapItems(events):  Array<number[]> {
    let eventsOrder: Array<number[]> = [];
    this.endOfEvent = events[0].endTime;

    const childOrder = events.reduce((acc: number[] = [0], item: number, index: number) => {
      if(events[index].startTime <= this.endOfEvent){ 
        if(events[index].endTime >= this.endOfEvent) { 
          this.endOfEvent = events[index].endTime;
        } 
        acc.push(index); 
      } else {
        eventsOrder.push(acc);
        acc = []; 
        acc.push(index); 
        this.endOfEvent = events[index].endTime;
      }
      return acc;
    }, [])

    eventsOrder.push(childOrder);
    
    return eventsOrder;
  }

  calcPosition(): void {
    const eventsOrder: Array<number[]> = this.checkOverlapItems(this.getEvents);
    const eventsBox: Events[] = this.eventsBox;
    let index: number;

    if (eventsOrder.length) {
      for (let item of eventsOrder) {
        index = item.length;
        item.map((el, key) => {
          eventsBox[el].width = this.tableWidth/index;
          eventsBox[el].left = this.tableWidth/index*key;
        })
      }
    }

    this.eventsBox = eventsBox
  }
}
</script>
