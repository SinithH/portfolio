import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from '../../posts/get-posts'

// Static export: every tag page must be known at build time
export async function generateStaticParams() {
  const tags = [...new Set(await getTags())]
  return tags.map((tag) => ({ tag }))
}

export const dynamicParams = false

export async function generateMetadata(props) {
  const { tag } = await props.params
  return { title: `Posts Tagged with “${decodeURIComponent(tag)}”` }
}

export default async function TagPage(props) {
  const { tag } = await props.params
  const name = decodeURIComponent(tag)
  const posts = (await getPosts()).filter((post) =>
    post.frontMatter.tags?.includes(name)
  )
  return (
    <>
      <h1>Posts Tagged with “{name}”</h1>
      {posts.map((post) => (
        <PostCard key={post.route} post={post} />
      ))}
    </>
  )
}
