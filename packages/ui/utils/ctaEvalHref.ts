import type { PayLoadLink } from '@mono/types/payload-types';

export const ctaEvalHref = (link: PayLoadLink) => {
  return link?.url ?? '/';
};
