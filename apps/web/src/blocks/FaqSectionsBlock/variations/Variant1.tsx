import RichText from '@mono/web/components/RichText/index';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@mono/web/components/ui/Accordion';
import { Button } from '@mono/web/components/ui/Button';
import type { FaqSectionsBlockType } from '..';

export default function Variant1({ content, items }: FaqSectionsBlockType) {
  console.log('In Variant1.tsx, this is content: ', content);
  console.log('In Variant1.tsx, this is items: ', items);
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
          {items?.map((item) => {
            return (
              <AccordionItem key={item?.id} value={item?.id as string}>
                <AccordionTrigger className="text-foreground text-base font-medium text-left">
                  {item?.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item?.description && <RichText data={item?.description} />}
                </AccordionContent>
              </AccordionItem>
            );
          })}
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
