import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import TaskView from '@/views/TaskView.vue';
import Row from '@/components/Row.vue';
import EventBox from '@/components/EventBox.vue';

const localVue = createLocalVue()
localVue.use(Vuex)
let wrapper: any

describe('Testing Task Page', () => {
  let actions
  let store
  let getters

  const events = [
    {
        "startTime": 0,
        "endTime": 150
    },
    {
        "startTime": 180,
        "endTime": 300
    },
  ]

  beforeEach(() => {
    actions = {
        fetchEvents: jest.fn(),
    }
    getters = {
        getEvents: () => events,
    }
    store = new Vuex.Store({
        modules: {
            events: {
              namespaced: true,
              state: {
                events: events
              },
              actions,
              getters,
            }
        }

    })

    wrapper = shallowMount(TaskView, {
      localVue,
      store,
    })
  })

  it('Task view is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('Task Page has proper layout', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Test getter getEvents', () => {
    expect(wrapper.vm.getEvents).toBe(events)
  })

  it('Test eventsBox', () => {
    expect(wrapper.vm.eventsBox).toHaveLength(2)
  })

  it('Check component Row is loaded', () => {
    const row = wrapper.findComponent(Row);
    expect(row.exists()).toBe(true)
  })

  it('Check component EventBox is loaded', () => {
    const eventBox = wrapper.findComponent(EventBox);
    expect(eventBox.exists()).toBe(true)
  })

  it('Test lastItem', () => {
    expect(wrapper.vm.lastItem).toBe(14)
  })

  it('Test allTimeFrames', () => {
    expect(wrapper.vm.allTimeFrames).toHaveLength(15)
  })
})