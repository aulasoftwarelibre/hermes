import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import Page from './page'

test('App Router: Works with Server Components', () => {
  render(<Page />)
  expect(screen.getByRole('main')).toBeDefined()
})
