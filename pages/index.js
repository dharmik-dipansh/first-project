import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>Hello Next.js + Tailwind</title>
      </Head>
      <h1 className="text-4xl font-bold text-center">Hello, World!</h1>
    </div>
  )
}