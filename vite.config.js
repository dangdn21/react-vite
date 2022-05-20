import * as path from 'node:path';
import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import WindiCSS from 'vite-plugin-windicss';
import { VitePWA } from 'vite-plugin-pwa';
import Inspect from 'vite-plugin-inspect';
import istanbul from 'rollup-plugin-istanbul';
import { extendRoute, onRouteGenerate } from './router.config';
import jsconfigPaths from 'vite-jsconfig-paths'

const ENV = process.env.VITE_ENV;

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
    extensions: [".ts", ".js", ".jsx", ".json"]
  },

  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-react#vitejsplugin-react-
    React({
      fastRefresh: process.env.NODE_ENV !== 'test',
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      pagesDir: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
      extensions: ['jsx', 'js', 'md', 'mdx'],
      onRoutesGenerated(routes) {
        return onRouteGenerate(routes);
      },
      extendRoute(route, parent) {
        return extendRoute(route, parent);
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          extension: 'jsx',
        }),
      ],
      include: [
        /\.[tj]sx?$/, // .js, .jsx
        /\.md$/, // .md
      ],
      imports: [
        {
          axios: [['default', 'http']],
          'react-i18next': ['useTranslation', 'initReactI18next'],
        },
      ],
      dts: false,
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      compiler: 'jsx',
      autoInstall: true,
    }),

    // https://github.com/windicss/windicss
    WindiCSS(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'locales/**/*.yaml', 'apple-touch-icon.png'],
      manifest: {
        theme_color: '#ffffff',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({ enabled: false }),

    // https://github.com/nabla/vite-plugin-eslint#readme
    // EslintPlugin(),

    jsconfigPaths(),

    ENV === 'test'
    && istanbul({
      include: ['src/**/*.{js,jsx}'],
    }),
  ],
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('recoil')) {
              return 'vendor_recoil';
            }
            if (id.includes('react')) {
              return 'vendor_react';
            }

            return 'vendor'; // all other package goes here
          }
        },
      },
    },
  },
  preview: {
    open: true,
    port: 4000,
  },

  server: {
    open: true, // open in browser on server start
    port: 8080,
    hmr: {
      protocol: 'ws',
      port: 8080,
    },
    fs: {
      strict: false,
    },
  },
});
