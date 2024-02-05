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
  { text: 'useEcharts', link: '/composables/useEcharts/' },
  { text: 'Loading', link: '/components/common/Loading/' },
  { text: 'ScrollTable', link: '/components/scroll/ScrollTable/' },
  { text: 'ScrollRank', link: '/components/scroll/ScrollRank/' },
  {
    text: '常用图表',
    items: [
      { text: '词云图', link: '/components/chart/WordCloudChart/' },
      { text: '进度池', link: '/components/chart/ProgressPool/' },
      { text: '地图', link: '/components/chart/GeoMap/' },
      { text: '水位图', link: '/components/chart/WaterLevelPond/' },
    ],
  },
  {
    text: '边框',
    items: [
      { text: '边框01', link: '/components/border/BoxBorder01/' },
      { text: '边框02', link: '/components/border/BoxBorder02/' },
      { text: '边框03', link: '/components/border/BoxBorder03/' },
      { text: '边框04', link: '/components/border/BoxBorder04/' },
      { text: '边框05', link: '/components/border/BoxBorder05/' },
      { text: '边框06', link: '/components/border/BoxBorder06/' },
      { text: '边框07', link: '/components/border/BoxBorder07/' },
      { text: '边框08', link: '/components/border/BoxBorder08/' },
      { text: '边框09', link: '/components/border/BoxBorder09/' },
      { text: '边框10', link: '/components/border/BoxBorder10/' },
      { text: '边框11', link: '/components/border/BoxBorder11/' },
      { text: '边框12', link: '/components/border/BoxBorder12/' },
      { text: '边框13', link: '/components/border/BoxBorder13/' },
    ],
  },
  {
    text: '装饰',
    items: [
      { text: '装饰01', link: '/components/decoration/Decoration01/' },
      { text: '装饰02', link: '/components/decoration/Decoration02/' },
      { text: '装饰03', link: '/components/decoration/Decoration03/' },
      { text: '装饰04', link: '/components/decoration/Decoration04/' },
      { text: '装饰05', link: '/components/decoration/Decoration05/' },
      { text: '装饰06', link: '/components/decoration/Decoration06/' },
      { text: '装饰07', link: '/components/decoration/Decoration07/' },
      { text: '装饰08', link: '/components/decoration/Decoration08/' },
      { text: '装饰09', link: '/components/decoration/Decoration09/' },
      { text: '装饰10', link: '/components/decoration/Decoration10/' },
      { text: '装饰11', link: '/components/decoration/Decoration11/' },
      { text: '装饰12', link: '/components/decoration/Decoration12/' },
    ],
  },
  { text: '按钮', link: '/components/button/BorderButton/' },
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
