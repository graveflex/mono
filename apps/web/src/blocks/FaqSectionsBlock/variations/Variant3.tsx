import RichText from '@mono/web/components/RichText/index';
import type { FaqSectionsBlockType } from '..';

export default function Variant3({
  content,
  items,
  topRightContent
}: FaqSectionsBlockType) {
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
            <div className="flex flex-col gap-4 md:gap-5 flex-1 text-center md:text-left">
              {content && <RichText data={content} />}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col flex-1 md:flex-row gap-3">
              {topRightContent && (
                <RichText className="flex-1" data={topRightContent} />
              )}
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
                <div className="text-base text-muted-foreground">
                  {item?.description && <RichText data={item?.description} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
