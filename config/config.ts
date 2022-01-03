import { defineConfig } from 'umi';

export default defineConfig({
  chunks: ['umi'],
  nodeModulesTransform: {
    type: 'none',
  },
  // base: '/',
  // fastRefresh: {},
  // history: { type: 'browser' },
  // dynamicImport: {},
  // runtimePublicPath: true,
  // publicPath: './',
  dva: {
    immer: true,
    hmr: false,
  },
  theme: {
    '@primary-color': '#1f7688d7',
    '@primary-bk-color': '#333333',
  },
});
