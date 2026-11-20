import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  // Static HTML export: `npm run build` writes the site to ./out
  output: 'export',
  // next/image optimization needs a server, so disable it for static export
  images: { unoptimized: true }
})
