import Layout from "@/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Analytics } from "@vercel/analytics/react"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
