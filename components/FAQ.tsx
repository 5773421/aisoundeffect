"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is an AI sound effect generator?",
    answer: <div className="space-y-2 leading-relaxed">An AI sound effect generator is a tool that utilizes artificial intelligence technology to create and manipulate various sound effects. It can generate a wide range of audio effects such as ambient sounds, machine noises, animal calls, and more, using advanced algorithms and machine learning techniques.</div>,
  },
  {
    question: "How does an AI sound effect generator work?",
    answer: (
      <p>
        An AI sound effect generator works by using deep learning models and neural networks to analyze and synthesize audio data. It can learn from existing sound samples and then generate new sound effects based on the learned patterns. The AI technology can adapt to different input parameters and produce realistic and diverse sound effects.
      </p>
    ),
  },
  {
    question: "What are the benefits of using an AI sound effect generator?",
    answer: (
      <div className="space-y-2 leading-relaxed">Using an AI sound effect generator offers several benefits, such as the ability to quickly create custom and realistic sound effects for various purposes including movies, video games, music production, and multimedia projects. It can also save time and resources by automating the sound design process and providing a wide variety of high-quality audio effects.</div>
    ),
  },
  {
    question: "Can an AI sound effect generator mimic natural sounds accurately?",
    answer: (
      <div className="space-y-2 leading-relaxed">Yes, an AI sound effect generator can mimic natural sounds with a high level of accuracy. Through advanced algorithms and machine learning, it can analyze and replicate the complex patterns and nuances of natural sounds, such as animal calls, environmental noises, and atmospheric effects, providing realistic and lifelike audio experiences.</div>
    ),
  },
  {
    question: "Is an AI sound effect generator suitable for professional audio production?",
    answer: (
      <div className="space-y-2 leading-relaxed">Yes, an AI sound effect generator is suitable for professional audio production. It can assist sound designers, composers, and audio engineers in creating high-quality sound effects for films, video games, virtual reality experiences, and other media projects. The advanced capabilities of AI technology can enhance the creative process and expand the possibilities of audio design.</div>
    ),
  },
  {
    question: "What are some popular AI sound effect generators available in the market?",
    answer: (
      <div className="space-y-2 leading-relaxed">There are several popular AI sound effect generators available in the market, including software applications, plugins, and online platforms. Some notable examples include XYZ Sound AI, SoundSense AI, SynthMaster, and Noiiz AI. These tools offer varying features and capabilities for creating and manipulating sound effects using artificial intelligence technology.</div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
