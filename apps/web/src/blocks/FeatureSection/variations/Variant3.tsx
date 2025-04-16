import RichText from '@mono/web/components/RichText/index';
import type { FeatureSectionType } from '..';

export default function Variant3({
  additionalContent,
  content
}: FeatureSectionType) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 lg:max-w-xl mx-auto lg:text-center">
          {content && <RichText data={content} />}
        </div>
        <div className="flex">
          {additionalContent && <RichText data={additionalContent} />}
        </div>
      </div>
    </section>
  );
}
