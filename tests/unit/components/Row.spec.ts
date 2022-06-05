import { shallowMount } from '@vue/test-utils';
import Row from '@/components/Row.vue';

let wrapper;

describe('Testing component Row', () => {
	describe('Row', () => {
        wrapper = shallowMount(Row, {
            propsData: {
                title: 'test',
                isLast: false
            }
        })

        it('Row is a Vue instance', () => {
            expect(wrapper.vm).toBeTruthy()
        })
        
        it('Row has proper layout', () => {
            expect(wrapper.html()).toMatchSnapshot()
        })

        it('Test prop isLast', () => {
            wrapper.setProps({ isLast: true })
            const body = wrapper.find('.time-body');
            expect(body).toBeTruthy()
        })


        it('Test prop title', () => {
            wrapper.setProps({ isLast: true })
            expect(wrapper.vm.title).toBe('test')
        })
	});
});