import {mutations} from '@/store/events/mutations';

const mockedData = [{"startTime": 0,"endTime": 150}]
const state = { events: []}

describe('mutations', () => {
        it('setEvents', async () => {
                mutations.setEvents(state, mockedData)
                expect(state.events).toEqual(mockedData)
	});	
});
