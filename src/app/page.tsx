import Image from "next/image";
import LandingPage from "./components/landing/landing";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Majoris.AI</title>
        <meta property="og:title" content="AI Powered Portfolio Making Tool" key="title" />
      </Head>
      <LandingPage />
    </div>
  );
}
