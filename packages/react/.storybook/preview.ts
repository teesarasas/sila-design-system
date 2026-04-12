import type { Preview } from '@storybook/react-vite'
import '../../tokens/dist/css/variables.css';
import '../../tokens/dist/css/variables-dark.css';
import '../src/index.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      document.documentElement.setAttribute('data-theme', theme);
      const bg = theme === 'dark' ? '#1a1a1a' : '#ffffff';
      const fg = theme === 'dark' ? '#ffffff' : '#3b3b3b';
      document.documentElement.style.backgroundColor = bg;
      document.documentElement.style.color = fg;
      document.body.style.backgroundColor = bg;
      document.body.style.color = fg;
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
