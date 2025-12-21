import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginPreview  } from '@rspress/plugin-preview';
export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'My Site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  // plugins: [pluginPreview()],
  // route:{
  //   exclude: ['custom.tsx', 'component/**/*'],
  // },
   // 其他配置...
  globalUIComponents: [
  // 注册全局组件,会在所有页面显示
  // path.join(__dirname, 'docs/components', 'MyComponents.tsx'),
  // path.join(__dirname, 'docs/components', 'picker.tsx'),
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
