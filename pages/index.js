import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Map from '@components/Map'

export default function Home() {
  return (
    <div className="container">
      <Head>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <Map />
      </main>

      <Footer />
    </div>
  )
}
