export function initSpoilers(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('.article-body .spoiler').forEach((el) => {
    if (el.dataset.spoilerBound === '1') return
    el.dataset.spoilerBound = '1'
    const reveal = () => el.classList.add('revealed')
    el.addEventListener('click', reveal)
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        reveal()
      }
    })
  })
}

const githubCache = new Map<string, any>()

export function initGithubCards(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>('.article-body .github-card').forEach(async (card) => {
    if (card.dataset.githubBound === '1') return
    card.dataset.githubBound = '1'
    const repo = card.dataset.githubCard
    if (!repo) return
    card.innerHTML = `
      <div class="github-card-body">
        <span class="github-card-repo">${repo}</span>
        <span class="github-card-desc">Loading repository information...</span>
      </div>
      <div class="github-card-stats"></div>
    `
    try {
      let data = githubCache.get(repo)
      if (!data) {
        const res = await fetch(`https://api.github.com/repos/${repo}`)
        if (!res.ok) throw new Error(String(res.status))
        data = await res.json()
        githubCache.set(repo, data)
      }
      const desc = card.querySelector('.github-card-desc')
      const stats = card.querySelector('.github-card-stats')
      if (desc) desc.textContent = data.description ?? ''
      if (stats) stats.innerHTML = `<span>★ ${data.stargazers_count ?? 0}</span><span>⑂ ${data.forks_count ?? 0}</span>`
    } catch {
      const desc = card.querySelector('.github-card-desc')
      if (desc) desc.textContent = 'Open on GitHub →'
    }
  })
}

export function bootPostEnhancers() {
  const run = () => {
    initSpoilers()
    initGithubCards()
  }
  run()
  document.addEventListener('astro:page-load', run)
}
