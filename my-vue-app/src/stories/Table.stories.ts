import Table from './Table.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'Country'],
    data: [
      { Name: 'Alice', Age: 25, Country: 'USA' },
      { Name: 'Bob', Age: 30, Country: 'Canada' },
      { Name: 'Charlie', Age: 35, Country: 'UK' },
    ],
  },
};
