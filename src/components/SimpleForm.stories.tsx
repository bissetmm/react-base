import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import SimpleForm from './SimpleForm'

export default { component: SimpleForm } as ComponentMeta<typeof SimpleForm>

export const Index: ComponentStoryObj<typeof SimpleForm> = {
  args: {
    title: 'お名前フォーム',
  },
}
