import { shallowMount } from '@vue/test-utils';
import EventBox from '@/components/EventBox.vue';

let wrapper;

const event = {
    startTime: 100,
    endTime: 300,
    width: 333,
    top: 0,
    left: 0,
    height: 240,
}

describe('Testing component EventBox', () => {
	describe('EventBox', () => {
        wrapper = shallowMount(EventBox, {
            propsData: {
                event: event
            }
        })

        it('EventBox is a Vue instance', () => {
            expect(wrapper.vm).toBeTruthy();
        })
        
        it('EventBox has proper layout', () => {
            expect(wrapper.html()).toMatchSnapshot();
        })

        it('Test prop event', () => {
            expect(wrapper.vm.event).toBe(event);
        })

        it('Test added classes style', () => {
            expect(wrapper.vm.style).toBe("top:0px; left:0px; width:333px; height:240px;")
        })

        it('Test has proper title', () => {
            expect(wrapper.find('.title').exists()).toBe(true)
            expect(wrapper.find('.title').text()).toBe('Event title');
        })
	});
});