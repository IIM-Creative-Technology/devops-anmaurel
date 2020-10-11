// import { mount } from '@vue/test-utils'
import App from './../../src/App.vue'

describe('App', () => {
  it('name app', () => {
    expect(typeof App.name).toBe('string')
  })
})
