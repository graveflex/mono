import type { Nav } from '@mono/types/payload-types';
import type { ButtonProps } from '@mono/web/components/ui/Button';
export type Link = {
  id?: string;
  label?: string | null;
  href?: string;
  newTab?: boolean;
  separator?: boolean;
  links?: Link[];
  variant?: ButtonProps['variant'];
};

type SubLinkKey = 'links0' | 'links1' | 'links2' | 'links3' | 'links4';

export function normalizeNavLinks(
  links: NonNullable<Nav['header']>['links'],
  level = 0
): Link[] {
  if (!links) {
    return [];
  }

  return links.map((link) => {
    return {
      id: link.id,
      label: link.text,
      href: link.url,
      newTab: link.newTab,
      links: normalizeNavLinks(
        link[`links${level}` as SubLinkKey & keyof typeof link],
        level + 1
      )
    } as Link;
  });
}
