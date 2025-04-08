import RichText from '@mono/web/components/RichText/index';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@mono/web/components/ui/Accordion';
import type { FaqSectionsBlockType } from '..';

export default function Variant2({ content, items }: FaqSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-5 flex-1">
            {content && <RichText data={content} />}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 flex-1">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible={true}
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                {items?.map((item) => {
                  return (
                    <AccordionItem key={item?.id} value={item?.id as string}>
                      <AccordionTrigger className="text-left text-foreground">
                        {item?.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-left text-foreground">
                        {item?.description && (
                          <RichText data={item?.description} />
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
