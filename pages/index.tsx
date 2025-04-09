import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Little Hero</title>
        <meta name="description" content="Create your own hero story!" />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  );
}
