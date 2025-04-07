import RichText from '@mono/web/components/RichText/index';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';
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
  },
  {
    id: 6,
    question: 'How does this improve my collaboration with developers?',
    answer:
      'Our components are built to closely match the shadcn/ui library, significantly reducing misinterpretations and implementation errors. This leads to smoother handoffs and fewer back-and-forths between design and development teams.'
  }
];

export default function Variant3({ content, items }: FaqSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12 md:gap-16 w-full">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            {/* Header Content */}
            <div className="flex flex-col gap-4 md:gap-5 max-w-xl text-center md:text-left">
              {/* Category Tag */}
              <p className="text-base font-semibold text-muted-foreground">
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
                We've compiled the most important information to help you get
                the most out of your experience. Can't find what you're looking
                for? Contact us.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-3">
              <Button
                variant="outline"
                aria-label="Contact our support team"
                className="text-foreground"
              >
                Contact us
                <ArrowUpRight />
              </Button>
              <Button
                variant="outline"
                aria-label="View documentation"
                className="text-foreground"
              >
                View documentation
                <ArrowUpRight />
              </Button>
            </div>
          </div>

          {/* FAQ Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8"
            role="list"
          >
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2"
                role="listitem"
              >
                <h3 className="text-base font-semibold text-card-foreground">
                  {item.question}
                </h3>
                <p className="text-base text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
