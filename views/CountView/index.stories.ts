import MyPage from './index.vue';

export default {
  title: 'Views/CountView',
  component: MyPage,
  parameters: {
    layout: 'fullscreen',
  },
};
export const Default = {
  args: {
    label: 'CountView',
  },
};
