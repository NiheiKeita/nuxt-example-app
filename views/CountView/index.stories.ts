import { render } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-vue3';
import * as Stories from './index.stories';

// eslint-disable-next-line storybook/story-exports
export default {};
const { InputFilled } = composeStories(Stories);
test('タスク名を入力して追加ボタンをクリックするとリストに追加される', async () => {
  const { container } = render(InputFilled());
  // eslint-disable-next-line storybook/context-in-play-function
  await Stories.InputFilled.play?.({ canvasElement: container } as any);
});
