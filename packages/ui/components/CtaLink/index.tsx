import type { PayLoadLink } from '@mono/types/payload-types';
import { ctaEvalHref } from '@mono/ui/utils/ctaEvalHref';
import Link from 'next/link';
import React from 'react';

export type CtaLinkType = {
  link?: PayLoadLink;
  ariaLabel?: string;
};

function CtaLink({ link, ariaLabel }: CtaLinkType) {
  return (
    <Link
      href={link ? (ctaEvalHref(link) as string) : ''}
      aria-label={ariaLabel}
      target={link?.newTab ? '_blank' : undefined}
      rel="preconnect"
    >
      {link?.text}
    </Link>
  );
}

export default CtaLink;
