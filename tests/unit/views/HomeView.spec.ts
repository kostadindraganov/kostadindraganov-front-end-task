import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

let wrapper;

describe('Testing Home Page', () => {
	describe('HomeView', () => {
    wrapper = shallowMount(HomeView)

    it('Home Page is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    
    it('Home Page has proper layout', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
	});
});