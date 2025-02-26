import type {
  CTAType,
  CollapsibleMenu,
  FlatMenu,
  IconNavItems,
  Image
} from '@mono/types/payload-types';
import { cn } from '@mono/web/lib/utils';
import type React from 'react';
import styles from './Header.module.css';
import DesktopMenu from './desktop';
import MobileMenu from './mobile';
import { data } from './mockData';

export type HeaderType = {
  logo?: Image | number | null;
  className?: string;
  collapsibleMenu?: CollapsibleMenu | null;
  flatMenu?: FlatMenu | null;
  iconItems?: IconNavItems | null;
  ctaButton?: {
    cta?: CTAType;
  };
};

function Header({ className }: HeaderType) {
  return (
    <header className={cn(styles.container, className)}>
      <DesktopMenu links={data} />
      <MobileMenu links={data} />
    </header>
  );
}

export default Header;
