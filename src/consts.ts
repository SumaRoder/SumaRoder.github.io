export interface NavItem {
  href: string
  label: string
}

export interface AboutBlock {
  title: string
  body: string
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
    about: { kicker: string; title: string; lead: string; blocks: AboutBlock[] }
  }
  nav: NavItem[]
  footer: {
    mark: string
    submark: string
    items: string[]
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
      kicker: 'ABOUT',
      title: '关于这个博客',
      lead: '这是一个用于记录文章、笔记和日常内容的个人博客。',
      blocks: [
        { title: '内容范围', body: '工程、设计、阅读、效率、生活观察。' },
        { title: '页面结构', body: '首页、文章列表、文章详情、标签页、归档页、关于页。' },
        { title: '视觉策略', body: '页面以清晰排版和易于阅读为主，方便浏览不同类型的内容。' },
      ],
    },
  },
  nav: [
    { href: '/', label: '首页' },
    { href: '/posts', label: '文章' },
    { href: '/tags', label: '标签' },
    { href: '/archive', label: '归档' },
    { href: '/about', label: '关于' },
  ],
  footer: {
    mark: 'ISKAROLINDE',
    submark: 'PERSONAL ARCHIVE',
    items: ['2026', 'WRITING / CODE / DESIGN', 'BUILT WITH ASTRO'],
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
}
