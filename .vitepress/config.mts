import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './docs',
  assetsDir: './assets',
  outDir: './dist/docs',
  title: "Ngx simple text editor",
  description: "Simple native text editor component for Angular 9+.",
  ignoreDeadLinks: ['./demo'],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/instalation' },
      { text: 'Demo', link: '/live' },
      { text: 'Playground', link: '/playground' },
      { text: 'Changelog', link: '/changelog' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Installation', link: '/instalation' },
          { text: 'Usage', link: '/usage' },
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: 'Buttons', link: '/custom-buttons' },
          { text: 'Style', link: '/custom-style' },
          { text: 'Localization', link: '/localization' },
        ]
      },
      {
        text: 'Demo',
        items: [
          { text: 'Live', link: '/live' },
          { text: 'Playground', link: '/playground' },
        ]
      },
      { text: 'Changelog', link: '/changelog' },
      { text: 'License', link: '/license' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Raiper34/ngx-simple-text-editor' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/ngx-simple-text-editor' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Filip Raiper34 Gulan'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/Raiper34/ngx-simple-text-editor/tree/main/docs/:path'
    },
  }
})
