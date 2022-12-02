import { createPinia, setActivePinia } from 'pinia'

import { usetaskListStore } from '../task_list'

describe('TaskList Store', () => {
  beforeEach(() => {    
    setActivePinia(createPinia())
  })

  it.skip('increments', () => {
    const taskList = usetaskListStore()
    expect(taskList.someValue).toBe(0)
    taskList.increment(1)
    expect(taskList.someValue).toBe(1)
  })  
})
