export function initPostsFilter(allLabel: string) {
  const search = document.querySelector<HTMLInputElement>('[data-search]')
  const filters = document.querySelector<HTMLElement>('[data-filters]')
  const list = document.querySelector<HTMLElement>('[data-list]')
  const empty = document.querySelector<HTMLElement>('[data-empty]')
  if (!search || !filters || !list || !empty) return

  let category = allLabel
  let query = ''
  const items = Array.from(list.querySelectorAll<HTMLElement>('.post-item'))

  function apply() {
    let visible = 0
    const k = query.trim().toLowerCase()
    items.forEach((item) => {
      const matchCategory = category === allLabel || item.dataset.category === category
      const matchQuery = !k || (item.dataset.keywords || '').includes(k)
      const ok = matchCategory && matchQuery
      item.hidden = !ok
      if (ok) visible++
    })
    empty!.hidden = visible !== 0
  }

  search.addEventListener('input', (e) => {
    query = (e.target as HTMLInputElement).value
    apply()
  })

  filters.querySelectorAll<HTMLButtonElement>('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')
      category = btn.dataset.filter || allLabel
      apply()
    })
  })
}
