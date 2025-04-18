import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: "Your next generation motor design assistant!",

  themeConfig: {
    nav: nav(),
    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/DawnEver/Hi-Motor-Designer/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Contact us: hi.motor.cn@gmail.com',
      copyright: 'Copyright © 2023-present Hi-Motor'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Download',
      link: '/en/download',
      activeMatch: '/en/download'
    },
    {
      text: 'Guide',
      link: '/en/getting-start/what-is-hmd',
      activeMatch: '/en/getting-start/'
    },
    {
      text: 'Links',
      items: [
        {
          text: 'Hi-Motor',
          link: 'https://hi-motor.site'
        },
        {
          text: 'Hi-Motor Hub',
          link: 'https://hub.hi-motor.site'
        },
        // {
        //   text: 'Wuhan Voltworks S&T Ltd.',
        //   link: 'https://voltworks.cn'
        // },
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    
    {
      text: 'Introduction',
      items: [
        { text: 'What is Hi-Motor Designer?', link: 'what-is-hmd' },
      ]
    },
  ]
}
