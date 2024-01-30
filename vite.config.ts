/// <reference types="vite/client" />
import path from 'node:path'
import process from 'node:process'
import type { UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'

const libDir = path.resolve(__dirname, 'lib')
const srcDir = path.resolve(__dirname, 'src')

export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {

    plugins: [
      Vue({}),
      Dts({
        include: ['src'],
        insertTypesEntry: true,
      }),
    ],
    build: {
      outDir: libDir,
      minify: 'esbuild',
      lib: {
        entry: path.resolve(srcDir, 'index.ts'),
        name: 'GuoduDataPanel',
        fileName: 'guodu-data-panel',
      },
      cssCodeSplit: true,
      // https://rollupjs.org/guide/en/#big-list-of-options
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          exports: 'named',
          // https://github.com/henriquehbr/svelte-typewriter/issues/21#issuecomment-968835822
          // inlineDynamicImports: true,
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'vue',
          },
        },
      },
    },

  }
})
