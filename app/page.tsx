import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import IframeCom from '@/components/Iframe';
import HowToUse from '@/components/HowToUse';

export default function Home() {
  return (
    <>
      {/* <Suspense>
        <Header />
      </Suspense> */}
      <main>
        <Hero />
        <IframeCom />
        {/* <Problem /> */}
        <FeaturesAccordion />
        <Pricing />
        <HowToUse />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}