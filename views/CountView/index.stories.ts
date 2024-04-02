import { expect } from '@storybook/test';
import { screen } from '@storybook/testing-library';
import CountView from './index.vue';

export default {
  title: 'Views/CountView',
  component: CountView,
  parameters: {
    layout: 'fullscreen',
  },
};
export const Test = {
  render: () => ({
    components: {
      CountView,
    },
    template: '<CountView />',
  }),
  play: async () => {
    const incButton = await screen.findByTestId('inc-button');
    expect(incButton);
    const decButton = await screen.findByTestId('dec-button');
    expect(decButton);
  },
};
