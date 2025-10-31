import type { Meta, StoryObj } from '@storybook/vue3-vite'

import OptionMenu from './option-menu.vue'

const meta = {
  title: 'Components/OptionMenu',
  component: OptionMenu,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    description: { control: 'text' },
    href: { control: 'text' },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof OptionMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { OptionMenu },
    setup: () => ({ args }),
    template: '<OptionMenu v-bind="args" />',
  }),
  args: {
    name: 'Configurações',
    description: 'Gerencie preferências de conta e aplicativo.',
    href: '/settings',
    icon: 'pi pi-cog',
  },
}

export const WithoutDescription: Story = {
  render: (args) => ({
    components: { OptionMenu },
    setup: () => ({ args }),
    template: '<OptionMenu v-bind="args" />',
  }),
  args: {
    name: 'Privacidade',
    description: '',
    href: '/privacy',
    icon: 'pi pi-shield',
  },
}

export const WithLongText: Story = {
  render: (args) => ({
    components: { OptionMenu },
    setup: () => ({ args }),
    template: '<OptionMenu v-bind="args" />',
  }),
  args: {
    name: 'Backups automáticos',
    description:
      'Quando ativado, criamos cópias de segurança diariamente durante a madrugada. Isso pode consumir dados e bateria em dispositivos móveis.',
    href: '/account/backups',
    icon: 'pi pi-cloud-upload',
  },
}
