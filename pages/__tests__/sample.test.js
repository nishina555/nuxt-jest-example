import { mount } from '@vue/test-utils'
import Counter from '../sample.vue'

describe('Counter', () => {
  const wrapper = mount(Counter)
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<p>0</p>')
  })
  it('has a button', () => {
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })
})