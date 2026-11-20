const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

const POSTS_DIR = path.join(__dirname, '..', 'app', 'posts')

async function generate() {
  const feed = new RSS({
    title: 'Your Name',
    site_url: 'https://yoursite.com',
    feed_url: 'https://yoursite.com/feed.xml'
  })

  const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true })

  await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async ({ name }) => {
        const file = path.join(POSTS_DIR, name, 'page.mdx')
        const content = await fs.readFile(file).catch(() => null)
        if (!content) return

        const { data } = matter(content)
        feed.item({
          title: data.title,
          url: '/posts/' + name,
          date: data.date,
          description: data.description,
          categories: data.tags ?? [],
          author: data.author
        })
      })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
