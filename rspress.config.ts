import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginPreview  } from '@rspress/plugin-preview';
export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Mika Design',
  icon: 'https://franxxdaryl.site/iconMika.png',
  logo: {
    light: 'https://franxxdaryl.site/static/brand.f263501a.png',
    dark: 'https://franxxdaryl.site/static/brand.f263501a.png',
  },
  // base: 'guide/index.html',
  globalStyles:
    path.join(__dirname, 'global.css'),
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
  // base: process.env.NODE_ENV === 'development' ? './' : '',
  builderConfig: {
    output: {
      assetPrefix: process.env.NODE_ENV === 'development' ? './' : 'https://all.franxxdaryl.site/mika-press/',
    },
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/DarylLi/mika-design',
      },
    ],
  },
});
