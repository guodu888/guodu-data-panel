import path from 'node:path'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { MarkdownTransform } from './plugins/markdownTransform'

const guide = [
  {
    text: '快速开始',
    link: '/guide',
  },
  {
    text: '注意事项',
    link: '/tips',
  },
]

const SideBar: DefaultTheme.SidebarItem[] = [
  { text: '介绍', items: guide },
  { text: '全屏容器', link: '/components/common/FullScreenContainer/' },
  {
    text: '边框',
    items: [
      { text: '边框01', link: '/components/border/BoxBorder01/' },
      { text: '边框02', link: '/components/border/BoxBorder02/' },
    ],
  },
  {
    text: '装饰',
    items: [
      { text: '装饰01', link: '/components/decoration/Decoration01/' },
      { text: '装饰02', link: '/components/decoration/Decoration02/' },
    ],
  },
  // { text: '其他', items: getOtherLinkList() },
]

export default defineConfig({
  // 站点级选项
  title: 'Guodu Data Panel',
  description: 'guodu data panel.',
  base: '/',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    outlineTitle: '目录',
    logo: '/favicon.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-PRESENT Yiguodu',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/guodu888/guodu-data-panel',
      },
    ],
    nav: [
      { text: '指引', link: '/guide' },
      { text: '示例', link: '/demo' },
    ],
    sidebar: SideBar,
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  ],
  vite: {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, '../../src')}/`,
      },
    },
    plugins: [
      MarkdownTransform(),
      Unocss(),
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
        dts: true,
        vueTemplate: true,
      }),
      Components({
        dts: true,
        dirs: ['./.vitepress/components'],
        resolvers: [NaiveUiResolver()],
      }),
    ],
    ssr: {
      noExternal: ['naive-ui'],
    },
  },
})
