import { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from '@/components/ui/theme-switcher'

const meta = {
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ThemeSwitcher',
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
