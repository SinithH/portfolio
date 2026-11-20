import { Footer, Layout, Navbar } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'

const meta = {
  title: 'Next.js Blog Starter Kit',
  description: 'Clone and deploy your own Next.js portfolio in minutes.',
  image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
}

export const metadata = {
  title: { default: meta.title, template: '%s – Sinith' },
  description: meta.description,
  robots: { index: true, follow: true },
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
  openGraph: {
    siteName: meta.title,
    title: meta.title,
    description: meta.description,
    images: [meta.image]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourname',
    title: meta.title,
    description: meta.description,
    images: [meta.image]
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()} />
          {children}
          <Footer>
            <time>{new Date().getFullYear()}</time> © Sinith.
            <a href="/feed.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
