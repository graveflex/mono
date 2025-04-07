import { FaqSectionsBlockT } from '@mono/types/payload-types';
import RichText from '@mono/web/components/RichText/index';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@mono/web/components/ui/Accordion';
import { Button } from '@mono/web/components/ui/Button';
import Link from 'next/link';
import type { FaqSectionsBlockType } from '..';

// FAQ items data
const faqItems = [
  {
    id: 1,
    question: 'What is shadcn/ui?',
    answer:
      'The shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.'
  },
  {
    id: 2,
    question: 'What is shadcn/ui kit for Figma?',
    answer:
      'The shadcn/ui kit for Figma is our comprehensive design kit that brings the shadcn/ui components into the Figma environment. It allows designers to create interfaces using shadcn/ui components directly in Figma, ensuring consistency between design and development.'
  },
  {
    id: 3,
    question: "I'm not familiar with shadcn/ui. Can I still use this kit?",
    answer:
      'Absolutely! Our kit is intuitive and comes with documentation to help you get started, regardless of your familiarity with Figma or shadcn/ui.'
  },
  {
    id: 4,
    question: 'Can I create multi-brand design systems with this UI kit?',
    answer:
      'Yes! Our kit is designed with multi-brand support in mind. You can easily create and manage multiple styles for different brands within a single design system using Figma variables.'
  },
  {
    id: 5,
    question: 'How will this kit save me time?',
    answer:
      'By providing pre-built, customizable components and templates, you can skip the repetitive setup work and focus on the unique aspects of your design. Our comprehensive asset library and pre-built screens also help speed up your workflow. What is more you can also save time on development and use shadcn/ui React library to code your designed interfaces.'
  }
];

export default function Variant4({ content, items }: FaqSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container gap-12 md:gap-16 mx-auto px-6 flex flex-col">
        {/* Section Header */}
        <div className="flex flex-col text-left md:text-center max-w-full md:max-w-xl gap-5 mx-auto">
          {/* Category Tag */}
          <p className="text-sm md:text-base text-muted-foreground font-semibold">
            FAQ section
          </p>
          {/* Main Title */}
          <h1
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Frequently asked questions
          </h1>
          {/* Section Description */}
          <p className="text-muted-foreground">
            We've compiled the most important information to help you get the
            most out of your experience. Can't find what you're looking for?{' '}
            <Link href="#" className="text-primary underline">
              Contact us.
            </Link>
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-6 md:gap-8" role="list">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row pt-6 md:pt-8 gap-2 md:gap-6 border-t border-border"
              role="listitem"
            >
              {/* Question */}
              <h2 className="text-base font-medium text-foreground flex-1">
                {item.question}
              </h2>
              {/* Answer */}
              <p className="text-muted-foreground flex-1">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
