import example from '../example'
import Card from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test card example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test card plugin', () => {
  const app = createApp({}).use(Card)
  expect(app.component(Card.name)).toBeTruthy()
})
