export interface NavItem {
  href: string
  label: string
}

export interface AboutBlock {
  title: string
  body: string
}

export interface BioSection {
  kicker: string
  title: string
  body: string
}

export interface BioContact {
  label: string
  value: string
  href?: string
}

export interface FriendLink {
  name: string
  url: string
  description: string
  tag?: string
}

export interface SiteConfig {
  title: string
  brand: {
    name: string
    sub: string
  }
  description: string
  lang: string
  hero: {
    eyebrow: string
    titleLines: string[]
    lead: string
    primaryCta: { href: string; label: string }
    secondaryCta: { href: string; label: string }
    consoleLabel: string
  }
  sections: {
    latest: { kicker: string; title: string; lead: string }
    tags: { kicker: string; title: string }
    archive: { kicker: string; title: string }
    aboutStrip: {
      eyebrow: string
      title: string
      lead: string
      ctaLabel: string
    }
  }
  pages: {
    posts: { kicker: string; title: string; lead: string; searchPlaceholder: string; allLabel: string }
    tags: { kicker: string; title: string; lead: string }
    archive: { kicker: string; title: string; lead: string }
    about: {
      kicker: string
      title: string
      lead: string
      handle: string
      tagline: string
      avatar?: string
      intro: string
      sections: BioSection[]
      contacts: BioContact[]
    }
    links: {
      kicker: string
      title: string
      lead: string
      note: string
      items: FriendLink[]
    }
  }
  nav: NavItem[]
  footer: {
    mark: string
    submark: string
    items: string[]
    nav: NavItem[]
    icp?: { label: string; href: string }
    marqueeText: string
  }
  bootLoader: {
    enabled: boolean
    brandFront: string
    brandBack: string
    readout: string
    cornerLeft: string
    cornerRight: string
  }
  license: {
    label: string
    url: string
    intro: string
    sourceLabel: string
  }
  comments: {
    enabled: boolean
    repo: `${string}/${string}`
    repoId: string
    category: string
    categoryId: string
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number'
    strict: '0' | '1'
    reactionsEnabled: '0' | '1'
    emitMetadata: '0' | '1'
    inputPosition: 'top' | 'bottom'
    theme: string
    lang: string
    loading: 'lazy' | 'eager'
  }
}

export const SITE: SiteConfig = {
  title: 'Iskarolinde // Personal Archive',
  brand: { name: 'ISKAROLINDE', sub: 'INDEX' },
  description: 'Iskarolinde 个人博客。记录工程、设计、阅读与生活。',
  lang: 'zh-CN',
  hero: {
    eyebrow: 'PERSONAL BLOG / FIELD ARCHIVE',
    titleLines: ['ISKAR', 'INDEX'],
    lead: '这里记录文章、笔记，以及日常学习和生活中的一些内容。',
    primaryCta: { href: '/posts', label: 'READ' },
    secondaryCta: { href: '/archive', label: 'ARCHIVE' },
    consoleLabel: 'REC 05 / 24',
  },
  sections: {
    latest: {
      kicker: 'LATEST DISPATCHES',
      title: '最近记录',
      lead: '这里整理了最近发布的文章，方便按时间查看最新内容。',
    },
    tags: { kicker: 'TAG INDEX', title: '标签' },
    archive: { kicker: 'ARCHIVE', title: '归档' },
    aboutStrip: {
      eyebrow: 'ABOUT THIS SITE',
      title: '一个普通的个人博客',
      lead: '这里提供文章列表、详情阅读、标签检索和归档查看等常用功能，方便浏览和查找内容。',
      ctaLabel: 'ABOUT',
    },
  },
  pages: {
    posts: {
      kicker: 'ALL POSTS',
      title: '文章列表',
      lead: '按主题筛选，按关键词搜索。每篇文章都保留可进入详情的独立路径。',
      searchPlaceholder: '搜索标题、摘要或标签',
      allLabel: '全部',
    },
    tags: {
      kicker: 'TAGS',
      title: '标签索引',
      lead: '每个标签都能跳到对应文章集合，方便横向浏览同主题内容。',
    },
    archive: {
      kicker: 'ARCHIVE',
      title: '时间归档',
      lead: '按照月份回看文章。它像一条写作日志，记录每个阶段反复出现的问题。',
    },
    about: {
      kicker: 'ABOUT / PROFILE',
      title: '关于我',
      lead: '一个写字、写代码、偶尔做点小工具的普通人。',
      handle: '@SumaRoder',
      tagline: '一个有点洁癖的好大喜功患者。',
      intro:
        '网名 SumaRoder。喜欢规整的代码、ML 家族的语言、和一切看起来很厉害但其实自己也搞不太明白的东西。这个站是我顺手用来记录写作、折腾、和日常琐碎的地方。',
      sections: [
        {
          kicker: 'NOW',
          title: '我在做什么',
          body: '正在维护一门叫 Suma-lang 的小型编译型语言；偶尔写点博客记录自己的折腾。',
        },
        {
          kicker: 'INTEREST',
          title: '我在喜欢什么',
          body: 'ML 家族的语言（类型推断 / 类型后置 / 函数一等公民）、编译器实现、安静且规整的视觉设计。',
        },
        {
          kicker: 'STACK',
          title: '常用的技术栈',
          body: 'Python、Java、SpringBoot、Kotlin、TypeScript、Astro、uv、pnpm、Maven。挑顺手的，能跑就行。',
        },
      ],
      contacts: [
        { label: 'GITHUB', value: 'SumaRoder', href: 'https://github.com/SumaRoder' },
        { label: 'RSS', value: '/rss.xml', href: '/rss.xml' },
        { label: 'EMAIL', value: 'kashamilar@outlook.com' },
      ],
    },
    links: {
      kicker: 'LINKS / FRIENDS',
      title: '友情链接',
      lead: '一些我在网上认识的、读得下去的、愿意常去看看的站点。',
      note: '想交换友链？发邮件或开 GitHub Issue 都可以，列在这里的人我会尽量回访。',
      items: [
        /*{
          name: '示例朋友 A',
          url: 'https://example.com',
          description: '占位描述。这是友链卡片的展示样式，可以在 src/consts.ts 的 pages.links.items 里编辑。',
          tag: 'friend',
        },
        {
          name: '示例朋友 B',
          url: 'https://example.org',
          description: '另一条占位描述。',
          tag: 'friend',
        },
        {
          name: 'Astro',
          url: 'https://astro.build',
          description: '这个博客就是用 Astro 搭的。',
          tag: 'tool',
        },*/
      ],
    },
  },
  nav: [
    { href: '/', label: '首页' },
    { href: '/posts', label: '文章' },
    { href: '/tags', label: '标签' },
    { href: '/archive', label: '归档' },
    { href: '/links', label: '友链' },
    { href: '/about', label: '关于' },
  ],
  footer: {
    mark: 'ISKAROLINDE',
    submark: 'PERSONAL ARCHIVE',
    items: ['2026', 'WRITING / CODE / DESIGN', 'BUILT WITH ASTRO'],
    nav: [
      { href: '/about', label: '关于' },
      { href: '/links', label: '友链' },
      { href: '/archive', label: '归档' },
      { href: '/rss.xml', label: 'RSS' },
    ],
    icp: {
      label: '萌ICP备20261030号',
      href: 'https://icp.gov.moe/?keyword=20261030',
    },
    marqueeText: '//ISKAROLINDE',
  },
  bootLoader: {
    enabled: true,
    brandFront: 'ISKAR',
    brandBack: 'IDX',
    readout: 'INITIALIZING ARCHIVE',
    cornerLeft: 'FIELD / BLOG / 2026',
    cornerRight: 'READY',
  },
  license: {
    label: '知识共享 署名-非商业性使用-相同方式共享 3.0 中国大陆（CC BY-NC-SA 3.0 CN）',
    url: 'https://creativecommons.org/licenses/by-nc-sa/3.0/cn/',
    intro: '本文采用',
    sourceLabel: '获取源代码',
  },
  comments: {
    enabled: true,
    repo: 'SumaRoder/SumaRoder.github.io',
    repoId: 'R_kgDOQ8NlNQ',
    category: 'Announcements',
    categoryId: 'DIC_kwDOQ8NlNc4C-D2C',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme',
    lang: 'zh-CN',
    loading: 'lazy',
  },
}
