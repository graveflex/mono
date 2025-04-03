import RichText from '@mono/web/components/RichText/index';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@mono/web/components/ui/Accordion';
import { Button } from '@mono/web/components/ui/Button';
import type { FaqSectionsBlockType } from '..';

export default function Variant1({ content }: FaqSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        {/* Section Header */}
        {content && <RichText data={content} />}

        {/* FAQ Accordion */}
        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items">
          {/* FAQ Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-foreground text-base font-medium text-left">
              What is shadcn/ui?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Shadcn/ui is a popular, open-source UI component library for React
              that focuses on flexibility and customization. It provides a set
              of accessible, customizable components that you can use to build
              modern web applications.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-foreground text-base font-medium text-left">
              What is shadcn/ui kit for Figma?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              The shadcn/ui kit for Figma is a comprehensive design resource
              that mirrors the components and styling of the shadcn/ui library.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-foreground text-base font-medium text-left">
              I'm not familiar with shadcn/ui. Can I still use this kit?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Yes, you can still use this kit even if you're new to shadcn/ui.
              The components are designed to be intuitive and easy to use.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-foreground text-base font-medium text-left">
              Can I create multi-brand design systems with this UI kit?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Yes, the UI kit is designed to be flexible and can be customized
              for multiple brands and design systems.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-foreground text-base font-medium text-left">
              How will this kit save me time?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              This kit provides pre-built components and consistent styling,
              reducing development and design time significantly.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-foreground text-base font-medium text-left">
              How does this improve my collaboration with developers?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              The kit provides a shared language and consistent components that
              both designers and developers can reference.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Card */}
        <div className="bg-primary-foreground w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">
              Still have questions?
            </h2>
            <p className="text-base text-muted-foreground">
              Have questions or need assistance? Our team is here to help!
            </p>
          </div>
          <Button aria-label="Contact our support team">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
