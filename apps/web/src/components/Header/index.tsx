import type { CTAType, Image, Nav } from '@mono/types/payload-types';
import { cn } from '@mono/web/lib/utils';
import type React from 'react';
import styles from './Header.module.css';
import DesktopMenu from './desktop';
import MobileMenu from './mobile';
import { normalizeNavLinks } from './shared';

export type HeaderProps = Nav['header'] & {
  logo?: Image | number | null;
  className?: string;
  ctaButton?: {
    cta?: CTAType;
  };
};

function Header({ className, links }: HeaderProps) {
  const formattedLinks = normalizeNavLinks(links);
  return (
    <header className={cn(styles.container, className)}>
      <DesktopMenu links={formattedLinks} />
      <MobileMenu links={formattedLinks} />
    </header>
  );
}

export default Header;
