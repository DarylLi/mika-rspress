import { defineConfig } from '@rslib/core';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginSass()],
  source: {
    entry: {
      index: './index.ts',
    },
    tsconfigPath: './tsconfig.build.json',
  },
  lib: [
    {
      format: 'esm',
      bundle: true,
      dts: true,
      autoExternal: true,
      output: {
        distPath: { root: 'dist/esm' },
        filename: { js: '[name].js', css: '[name].css' },
      },
    },
    {
      format: 'cjs',
      bundle: true,
      dts: false,
      autoExternal: true,
      output: {
        distPath: { root: 'dist/cjs' },
        filename: { js: '[name].js', css: '[name].css' },
      },
    },
  ],
});
