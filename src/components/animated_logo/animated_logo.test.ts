import { render } from '@testing-library/vue'

import AnimatedLogo from './animated_logo.vue'

describe('AnimatedLogo', () => {
  it.skip('Displays AnimatedLogo', async () => {
    const { getByText } = render(AnimatedLogo)

    expect(getByText('AnimatedLogo').textContent).falsy()
  })
})
