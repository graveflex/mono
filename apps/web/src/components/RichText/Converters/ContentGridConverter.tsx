import RichText from '@mono/web/components/RichText/index';
import type { RichTextType } from '@mono/web/components/RichText/index';
import type { SerializedBlockNode } from '@payloadcms/richtext-lexical';
import { Diamond } from 'lucide-react';

type ItemType = {
  id: string;
  heading: string;
  title?: string;
  innerContent?: RichTextType['data'];
};

const ContentGridConverter = ({ node }: { node: SerializedBlockNode }) => {
  const items = node?.fields?.contentGridItems ?? [];
  const contentHeaderType = node?.fields?.contentHeaderType ?? 'icon';
  const contentHeaderPosition = node?.fields?.contentHeaderPosition ?? 'top';
  const isFlexColLayout = contentHeaderPosition === 'top' ? 'flex-col' : '';
  const numOfColsOnDesktop = node?.fields?.numOfColsOnDesktop ?? '2';
  const desktopColumns = `md:grid-cols-${numOfColsOnDesktop}`;

  return (
    <div className={`content-grid-container grid gap-6 ${desktopColumns}`}>
      {items.map((item: ItemType) => {
        return (
          <div
            key={item?.id}
            className={`content-grid-item flex ${isFlexColLayout} gap-5`}
          >
            {contentHeaderType === 'title' ? (
              <h3 className="text-3xl">{item?.title}</h3>
            ) : (
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Diamond className="w-5 h-5 text-primary" />
              </div>
            )}
            <div className="item-text-container">
              <p className="content-grid-heading font-semibold">
                {item?.heading}
              </p>
              {item?.innerContent && <RichText data={item?.innerContent} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentGridConverter;
