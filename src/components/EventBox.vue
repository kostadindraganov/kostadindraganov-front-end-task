<template>
  <div 
  class="event-box absolute z-10 bg-white border-l-4 border-pink-500"
  :style="style"
  >
    <h3 class="title">
     Event title
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Events } from '@/types/Events';

@Component
export default class EventBox extends Vue {
  @Prop({ 
    type: Object, 
    default: {} 
  }) private event!: Events;

get style() {
  return `top:${this.event.top}px; left:${this.event.left}px; width:${this.event.width}px; height:${this.event.height}px;`
}

}
</script>
