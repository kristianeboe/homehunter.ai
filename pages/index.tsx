import Head from 'next/head'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Features from '../components/Features'
import EmailCaptureHorizontal from '../components/EmailCaptureHorizontal'
import Testimonial from '../components/Testimonial';

const Home = () => (
  <div className="">
    <Head>
      <title>Homehunter.ai</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
    <Landing />
      <Features />
      <EmailCaptureHorizontal />
      <Testimonial />
    </main>

    <footer>
    <Footer />
    </footer>

  </div>
)

export default Home
