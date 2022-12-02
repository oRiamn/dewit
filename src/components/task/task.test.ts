import { render } from '@testing-library/vue'

import Task from './task.vue'

describe('Task', () => {
  it.skip('Displays Task', async () => {
    const { getByText } = render(Task)

    expect(getByText('Task').textContent).falsy()
  })
})
