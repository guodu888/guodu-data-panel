import path from 'node:path'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

const guide = [
  {
    text: '快速开始',
    link: '/guide/guide',
  },
  {
    text: '注意事项',
    link: '/Guide/Tips',
  },
]

const SideBar: DefaultTheme.SidebarItem[] = [
  { text: '介绍', items: guide },
  {
    text: '边框',
    items: [
      { text: '边框01', link: '/border/BoxBorder01/' },
      { text: '边框02', link: '/border/BoxBorder02/' },
    ],
  },
  // { text: '装饰', items: getDecorationLinkList() },
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
      { text: '指引', link: '/guide/guide' },
      { text: '示例', link: '/demo/demo' },
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
      Unocss(),
    ],
  },
})
