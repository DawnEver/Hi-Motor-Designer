
import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: "全球领先的高效电机设计工业软件",

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/Hi-Motor/Hi-Motor-Designer/edit/main/src/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '联系我们: mingyangbao@hust.edu.cn',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} Hi-Motor`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/getting-start/what-is-hmd',
      activeMatch: '/getting-start'
    },
    {
      text: '下载',
      link: '/download',
      activeMatch: '/download'
    },
    {
      text: '链接',
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
        //   text: '武汉伏特沃克科技有限公司',
        //   link: 'https://voltworks.cn'
        // },
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '入门',
      items: [
        { text: '什么是 Hi-Motor Designer', link: '/getting-start/what-is-hmd' },
        { text: '快速开始', link: '/getting-start/quickstart' },
        { text: '用户界面', link: '/getting-start/gui' },
      ]
    },
    {
      text: '功能',
      items: [
        { text: '结构建模', link: '/features/modeling' },
        { text: '绕组分析', link: '/features/windings' },
        { text: '仿真计算', link: '/features/simulation' },
        { text: '算法优化', link: '/features/optimization' },
        { text: '偏好设置', link: '/features/settings' },
      ]
    },
    {
      text: '示例',
      items: [
        { text: '一台 2.2 kw 流线型磁障同步磁阻电机', link: '/examples/01' },
      ]
    },
    { text: '常见问题', link: '/q&a' },
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}