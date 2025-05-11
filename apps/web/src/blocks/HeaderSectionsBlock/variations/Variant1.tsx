import type { HeaderSectionsBlockType } from '@mono/web/blocks/HeaderSectionsBlock';
import RichText from '@mono/web/components/RichText/index';

export default function Variant1({ content }: HeaderSectionsBlockType) {
  return (
    <section className="bg-background" aria-labelledby="page-heading">
      <div className="container px-6 mx-auto">
        {content && <RichText data={content} />}
      </div>
    </section>
  );
}
