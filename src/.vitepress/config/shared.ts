import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    title: "Hi-Motor Designer",
    
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    markdown: {
        // math: true,
        codeTransformers: [
        // We use `[!!code` in demo to prevent transformation, here we revert it back.
        {
            postprocess(code) {
            return code.replace(/\[\!\!code/g, '[!code')
            }
        }
        ]
    },
    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://cdn.jsdelivr.net/gh/Hi-Motor/Designs@main/logo-latest/favicon.ico' }],
    ],
    locales: {
      zh: {
        label: 'Chinese',
        lang: 'zh',
        link: '/zh/'
      },
      en: {
        label: 'English',
        lang: 'en',
        link: '/en/'
      }
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      search: {
        provider: 'local'
      },
      logo: 'https://cdn.jsdelivr.net/gh/Hi-Motor/Images@main/logo-latest/hi-motor_02.svg',
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/Hi-Motor/Hi-Motor-Designer' },
        { icon: 'youtube', link: 'https://space.bilibili.com/3546644771506195' }
      ],
 
    },
})