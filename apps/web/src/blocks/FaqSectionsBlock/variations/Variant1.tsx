import RichText from '@mono/web/components/RichText/index';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@mono/web/components/ui/Accordion';
import { Button } from '@mono/web/components/ui/Button';
import type { FaqSectionsBlockType } from '..';

export default function Variant1({
  bottomContent,
  content,
  items
}: FaqSectionsBlockType) {
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
            {bottomContent && <RichText data={bottomContent} />}
          </div>
          {/* <Button aria-label="Contact our support team">Contact us</Button> */}
        </div>
      </div>
    </section>
  );
}
