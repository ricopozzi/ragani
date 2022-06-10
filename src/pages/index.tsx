import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { ServicesSection } from "../components/ServicesSection";
import { WppButton } from "../components/WppButton";
import { ContactSection } from "../components/ContactSection";
import { InfoSection } from "../components/InfoSection";
import { Footer } from "../components/Footer";
import { useRef } from "react";
import { Main } from "../components/Main";
const Home: NextPage = () => {
  const servicesRef = useRef().current;

  return (
    <>
      <Head>
        <title>Ragani</title>
        <link rel='icon' type='image/x-icon' href='ragani.png' />
      </Head>
      <Header />
      <main className=' min-h-screen  md:mx-auto '>
        <Main />
        <ServicesSection />
        <div className='my-10'>
          <InfoSection />
        </div>
        <WppButton />
      </main>

      <Footer />
    </>
  );
};

export default Home;
