import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import CTA from "@/components/CTA";
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
        <Features />
        <HowToUse />
        <FAQs />
        {/* <CTA /> */}
      </main>
    </>
  );
}