import { visit } from 'unist-util-visit'
import type { Root } from 'mdast'
import type { Plugin } from 'unified'

export const remarkGithubCard: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'leafDirective' && node.type !== 'textDirective') return
      const directive = node as any
      if (directive.name !== 'github') return

      const repo = directive.attributes?.repo
      if (typeof repo !== 'string' || !/^[\w.-]+\/[\w.-]+$/.test(repo)) return

      const data = (directive.data ??= {})
      data.hName = 'a'
      data.hProperties = {
        className: ['github-card'],
        href: `https://github.com/${repo}`,
        target: '_blank',
        rel: 'noreferrer',
        'data-github-card': repo,
      }
      directive.children = [
        {
          type: 'text',
          data: {
            hName: 'span',
            hProperties: { className: ['github-card-fallback'] },
          },
          value: repo,
        },
      ]
    })
  }
}
