import { PostCard } from 'nextra-theme-blog'
import { getPosts } from './get-posts'

export const metadata = { title: 'Posts' }

export default async function PostsPage() {
  const posts = await getPosts()
  return (
    <div data-pagefind-ignore="all">
      <h1>Posts</h1>
      <p>hehe hehe</p>
      {posts.map((post) => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  )
}
