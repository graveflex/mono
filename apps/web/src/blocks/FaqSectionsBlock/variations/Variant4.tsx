import RichText from '@mono/web/components/RichText/index';
import type { FaqSectionsBlockType } from '..';

export default function Variant4({ content, items }: FaqSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container gap-12 md:gap-16 mx-auto px-6 flex flex-col">
        {/* Section Header */}
        <div className="flex flex-col text-left md:text-center max-w-full md:max-w-xl gap-5 mx-auto">
          {content && <RichText data={content} />}
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-6 md:gap-8" role="list">
          {items?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row pt-6 md:pt-8 gap-2 md:gap-6 border-t border-border"
              role="listitem"
            >
              {/* Question */}
              <h2 className="text-base font-medium text-foreground flex-1">
                {item.title}
              </h2>
              {/* Answer */}
              <p className="text-muted-foreground flex-1">
                {item?.description && <RichText data={item?.description} />}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
