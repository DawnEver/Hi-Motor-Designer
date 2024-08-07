import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: "Your next generation motor design assistant!",

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
      '/en/examples/': { base: '/en/examples/', items: sidebarExamples() }
    },

    editLink: {
      pattern: 'https://github.com/Hi-Motor/Hi-Motor-Designer/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: '',
      copyright: 'Copyright © 2019-present Hi-Motor'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/en/guide/what-is-hmd',
      activeMatch: '/en/guide/'
    },
    {
      text: 'Examples',
      link: '/en/examples/examples',
      activeMatch: '/en/examples/'
    },
    {
      items: [
        {
          text: 'Changelog',
          link: '/'
        },
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Hi-Motor Designer?', link: 'what-is-hmd' },
        { text: 'Getting Started', link: 'getting-started' },
      ]
    },
  ]
}

function sidebarExamples(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Examples',
      items: [
        { text: 'Examples', link: 'examples' },

      ]
    }
  ]
}