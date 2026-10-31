import { defineConfig } from 'vite';

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'serve' && !isPreview ? '/' : '/EnglishCourse/',
  build: { target: 'es2022' },
}));
