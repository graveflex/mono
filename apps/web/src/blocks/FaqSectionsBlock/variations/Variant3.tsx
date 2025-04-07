import RichText from '@mono/web/components/RichText/index';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';
import type { FaqSectionsBlockType } from '..';

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
              {content && <RichText data={content} />}
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
            {items?.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2"
                role="listitem"
              >
                <h3 className="text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {item?.description && <RichText data={item?.description} />}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
