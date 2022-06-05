<template>
  <div class="time-row relative w-100" ref="row">
    <div class="absolute -left-20 -top-33">
      <div class="w-16 text-right">
      <span class="text-lg text-slate-500"> {{title}} </span>

      </div>
    </div>

    <div v-if="showRow" class="time-body bg-gray-100 h-15.5 border-l-2 border-l-slate-200 box-border">

    </div>
  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Row extends Vue {
  @Prop() private title!: string;
  @Prop({ 
    type: Boolean, 
    default: false 
  }) private isLast!: boolean;

  get showRow(): boolean {
    return !this.isLast;
  }

}
</script>
