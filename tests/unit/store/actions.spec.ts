import { actions } from '@/store/events/actions';
import { EventsApiFacade } from '@/apiFacade/EventsApiFacade';

const mockedData = [{"startTime": 0,"endTime": 150}]

describe('actions', () => {
    const context = {
        commit: jest.fn(),
        dispatch: jest.fn()
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

	it('fetchEvents', async () => {
		const spyEventsApiFacade = jest.spyOn(EventsApiFacade, 'getAllEvents').mockResolvedValue(mockedData);
		await (actions as any).fetchEvents(context);
		expect(spyEventsApiFacade).toHaveBeenCalled();
		expect(context.commit).toHaveBeenCalledWith('setEvents', mockedData);
	});	
});


