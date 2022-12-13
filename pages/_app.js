import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Lora } from '@next/font/google'

const lora = Lora({ 
  weight: '400',
  subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
    <main className={lora.className}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
    </>
  )
}

export default MyApp
