import { addons } from '@storybook/manager-api';
import ggTheme from './GGTheme';

addons.setConfig({
  theme: ggTheme,
  sidebar: {
    showRoots: false
  }
});