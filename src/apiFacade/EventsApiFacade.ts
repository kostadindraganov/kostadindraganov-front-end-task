import Axios from "axios";
import { Event } from '@/types/Event';

export abstract class EventsApiFacade {
  private static usersAxios = Axios.create();

  static async getAllEvents(): Promise<Event[]>{
    const response = await this.usersAxios.get<Event[]>('http://localhost:3000/events');
    return response.data;
  }
}
