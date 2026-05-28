import { visit } from 'unist-util-visit'
import type { Root } from 'mdast'
import type { Plugin } from 'unified'

export const remarkSpoiler: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'textDirective' && node.type !== 'leafDirective') return
      const directive = node as any
      if (directive.name !== 'spoiler') return

      const data = (directive.data ??= {})
      data.hName = 'span'
      data.hProperties = {
        className: ['spoiler'],
        tabindex: '0',
        role: 'button',
        'aria-label': 'Hidden content, click or focus to reveal',
      }
    })
  }
}
