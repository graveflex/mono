import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import React from 'react';

import RichText from '@mono/web/components/RichText/index';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

import styles from '../CtaSectionsBlock.module.css';

function CtaSections1({ content }: CtaSectionsBlockType) {
  return (
    <section className={styles.container} aria-labelledby="cta-heading">
      <div className={styles.content}>
        <div className="flex flex-col items-center max-w-xl gap-8 md:gap-10 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 md:gap-5">
            {content && <RichText data={content} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSections1;
