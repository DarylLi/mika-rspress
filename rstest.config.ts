import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rstest/core';

export default defineConfig({
    plugins: [pluginReact(), pluginSass()],
    testEnvironment: 'happy-dom',
    setupFiles: ['./setupTests.ts'],
});