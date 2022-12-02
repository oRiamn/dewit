import { render } from '@testing-library/vue'

import TaskList from './task_list.vue'

describe('TaskList', () => {
  it.skip('Displays TaskList', async () => {
    const { getByText } = render(TaskList)

    expect(getByText('TaskList').textContent).falsy()
  })
})
