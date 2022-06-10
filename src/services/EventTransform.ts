import { EventsBox } from '@/types/EventsBox';

export default class EventTransform {
    private readonly width: number;
    private readonly padding: number;
    private events: EventsBox[];
    private eventsBox: EventsBox[] = [];
    private endOfEvent = 0;

    constructor( width: number, padding: number, events: EventsBox[]) {
        this.width = width;
        this.padding = padding;
        this.events = events;
    }

    public sortEvents(): EventsBox[] {
        const events = this.events.sort((first: EventsBox,last: EventsBox) => {
            if(first.startTime > last.startTime) { return 1; }
            if(first.startTime < last.startTime) { return -1; }
            return 0;
          });
      
        events.map((item: EventsBox) => 
            Object.assign(item, {
              height: item.endTime - item.startTime,
              top: item.startTime
            })
        )
        
        this.eventsBox = events;

        return events;
    }

    public checkOverlapItems(): Array<number[]>  {
        const eventsOrder: Array<number[]> = [];
        this.endOfEvent = this.events[0].endTime;
    
        const childOrder = this.events.reduce((acc: number[] = [0], item, index: number) => {
          if(this.events[index].startTime <= this.endOfEvent){ 
            if(this.events[index].endTime >= this.endOfEvent) { 
              this.endOfEvent = this.events[index].endTime;
            } 
            acc.push(index); 
          } else {
            eventsOrder.push(acc);
            acc = []; 
            acc.push(index); 
            this.endOfEvent = this.events[index].endTime;
          }
          return acc;
        }, [])
    
        eventsOrder.push(childOrder);

        return eventsOrder;
    }

    public calcPosition(): EventsBox[] {
        const eventsOrder: Array<number[]> = this.checkOverlapItems();
        const tableWidth = this.width - this.padding;
        let index: number;
    
        if (eventsOrder.length) {
          for (const item of eventsOrder) {
            index = item.length;
            item.map((el, key) => {
              this.eventsBox[el].width = tableWidth/index;
              this.eventsBox[el].left = tableWidth/index*key;
            })
          }
        }
    
        return this.eventsBox;
    }

    public getAllTransformedEvents(): EventsBox[] {
        this.sortEvents();
        this.calcPosition();

        return this.eventsBox;
    }
    
}

export type EventTransformServiceType = InstanceType<typeof EventTransform>;

let EventTransformInstance: EventTransformServiceType;

export function getEventTransformInstance(width: number, padding: number, events: EventsBox[], ): EventTransformServiceType {
  if (!EventTransformInstance) {
    EventTransformInstance = new EventTransform(width, padding, events);
  }
  return EventTransformInstance;
}