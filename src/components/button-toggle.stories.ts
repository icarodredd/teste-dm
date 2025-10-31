import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ButtonToggle from './button-toggle.vue'

const meta = {
  title: 'Components/ButtonToggle',
  component: ButtonToggle,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof ButtonToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => ({
    components: { ButtonToggle },
    setup() {
      return { args }
    },
    template: '<ButtonToggle v-bind="args" />',
  }),
  args: {
    title: 'Ativar notificações',
    description: 'Receba alertas em tempo real sobre atividades importantes.',
  },
}

export const WithoutDescription: Story = {
  render: (args) => ({
    components: { ButtonToggle },
    setup() {
      return { args }
    },
    template: '<ButtonToggle v-bind="args" />',
  }),
  args: {
    title: 'Modo silencioso',
    description: '',
  },
}

export const LongDescription: Story = {
  render: (args) => ({
    components: { ButtonToggle },
    setup() {
      return { args }
    },
    template: '<ButtonToggle v-bind="args" />',
  }),
  args: {
    title: 'Backups automáticos',
    description:
      'Quando ativado, criaremos cópias de segurança diariamente durante a madrugada. Esse processo pode consumir dados e bateria em dispositivos móveis.',
  },
}
