import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import RichText from '@mono/web/components/RichText/index';
import React from 'react';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

function CtaSections2({ content, rightContent }: CtaSectionsBlockType) {
  return (
    <section
      className="bg-background py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-6">
        <div className="w-full flex flex-col md:flex-row gap-8 items-center text-center md:text-left justify-between">
          {content && <RichText data={content} className="flex-1" />}

          {rightContent && (
            <RichText
              data={rightContent}
              className="flex-1 max-md:[&>p]:text-center!"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default CtaSections2;
