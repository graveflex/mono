import Logo from '@mono/web/components/Logo';
import { Avatar, AvatarFallback } from '@mono/web/components/ui/Avatar';
import { Button } from '@mono/web/components/ui/Button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@mono/web/components/ui/Sheet';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator
} from '@mono/web/components/ui/Sidebar';
import { MenuIcon } from 'lucide-react';
import NextLink from 'next/link';
import { SheetHeader } from '../ui/Sheet';
import styles from './Header.module.css';
import type { Link } from './shared';

function SidebarLink({ href, label, separator }: Link) {
  if (separator) {
    return null;
  }

  const displayLabel = label || 'Untitled Link';

  if (href) {
    return <NextLink href={href}>{displayLabel}</NextLink>;
  }

  return displayLabel;
}

function TopLevelMobileDropdownContainer({
  links,
  level = 0
}: { links: Link[]; level?: number }) {
  return (
    <SidebarMenu className="list-none ml-0">
      {links.map((link) =>
        link.separator ? (
          <SidebarSeparator key={`sidebar-separator-${level}-${link.id}`} />
        ) : (
          <SidebarMenuItem key={`sidebar-item-${level}-${link.id}`} className="my-0">
            <SidebarMenuButton asChild={true}>
              <SidebarLink {...link} />
            </SidebarMenuButton>
            {link.links?.length ? (
              <RecurseNavItems links={link.links} level={level + 1} />
            ) : null}
          </SidebarMenuItem>
        )
      )}
    </SidebarMenu>
  );
}

function NestedMobileDropdownContainer({
  links,
  level
}: { links: Link[]; level: number }) {
  return (
    <SidebarMenuSub className="list-none">
      {links.map((link) =>
        link.separator ? null : (
          <SidebarMenuSubItem key={`sidebar-subitem-${level}-${link.id}`} className="my-0">
            <SidebarMenuSubButton asChild={true}>
              <SidebarLink {...link} />
            </SidebarMenuSubButton>
            {link.links?.length ? (
              <RecurseNavItems links={link.links} level={level + 1} />
            ) : null}
          </SidebarMenuSubItem>
        )
      )}
    </SidebarMenuSub>
  );
}

function RecurseNavItems({
  links = [],
  level = 0
}: { links: Link[]; level?: number }) {
  const Container =
    level === 0
      ? TopLevelMobileDropdownContainer
      : NestedMobileDropdownContainer;

  return <Container level={level} links={links} />;
}

interface MobileMenuProps {
  links: Link[];
}

function MobileMenu({ links = [] }: MobileMenuProps) {
  return (
    <div className={styles.mobileNavContainer}>
      <Sheet>
        <SheetTrigger asChild={true}>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className={styles.sheetContent}>
          <SheetHeader className={styles.sheetHeader}>
            <Avatar>
              <AvatarFallback>LH</AvatarFallback>
            </Avatar>
          </SheetHeader>

          <div className={styles.mobileNavTree}>
            <RecurseNavItems links={links} />
          </div>
        </SheetContent>
      </Sheet>
      <Logo />
      <Avatar>
        <AvatarFallback>LH</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default MobileMenu;
