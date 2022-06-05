/* eslint-disable @typescript-eslint/ban-types */
import { state } from '@/store/events/state';
import { getters } from '@/store/events/getters';

describe('getters', () => {
	describe('getEvents', () => {
		it('Empty state', () => {
			const result = (getters as any).getEvents(state);
			expect(result).toEqual([]);
		});
		it('With events', () => {
            const result = (getters as any).getEvents({
                events: {"endTime": 150, "startTime": 0}
            });
		
			expect(result).toEqual({"endTime": 150, "startTime": 0});
		});
	});
});

