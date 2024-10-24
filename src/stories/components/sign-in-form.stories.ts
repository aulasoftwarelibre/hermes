import { Meta, StoryObj } from '@storybook/react'

import SignInForm from '@/app/(auth)/components/sign-in-form'

const meta = {
  component: SignInForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
