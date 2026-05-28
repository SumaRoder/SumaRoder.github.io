import { visit } from 'unist-util-visit'
import type { Root, RootContent } from 'mdast'
import type { Plugin } from 'unified'

const ADMONITION_TYPES = new Set(['note', 'tip', 'important', 'warning', 'caution'])
const DEFAULT_TITLES: Record<string, string> = {
  note: 'NOTE',
  tip: 'TIP',
  important: 'IMPORTANT',
  warning: 'WARNING',
  caution: 'CAUTION',
}

export const remarkAdmonitions: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return
      const directive = node as any
      if (!ADMONITION_TYPES.has(directive.name)) return

      const customTitle = extractLabel(directive)
      const title = customTitle || DEFAULT_TITLES[directive.name]
      const data = (directive.data ??= {})
      data.hName = 'aside'
      data.hProperties = {
        className: ['admonition', `admonition-${directive.name}`],
        'data-admonition': directive.name,
      }
      directive.children = [
        {
          type: 'paragraph',
          data: {
            hName: 'div',
            hProperties: { className: ['admonition-title'] },
          },
          children: [{ type: 'text', value: title }],
        },
        ...directive.children,
      ] as RootContent[]
    })
  }
}

function extractLabel(node: any): string | null {
  const first = node.children?.[0]
  if (!first || first.type !== 'paragraph') return null
  const labelData = first.data
  if (!labelData?.directiveLabel) return null
  const text = (first.children ?? [])
    .map((c: any) => (c.type === 'text' ? c.value : ''))
    .join('')
    .trim()
  if (text) {
    node.children.shift()
    return text
  }
  return null
}
