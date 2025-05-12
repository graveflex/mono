import Logo from '@mono/web/components/Logo';
import { Avatar, AvatarFallback } from '@mono/web/components/ui/Avatar';
import { buttonVariants } from '@mono/web/components/ui/Button';
import { DropdownMenuSeparator } from '@mono/web/components/ui/DropdownMenu';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@mono/web/components/ui/HoverCard';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@mono/web/components/ui/NavigationMenu';
import { ChevronRight } from 'lucide-react';
import NextLink from 'next/link';
import styles from './Header.module.css';
import type { Link } from './shared';

function DesktopDropdownLink({
  href,
  label,
  separator,
  variant = 'link'
}: Link & { children?: React.ReactNode }) {
  if (separator) {
    return <DropdownMenuSeparator className={styles.separator} />;
  }

  const displayLabel = label || 'Untitled Link';

  if (href) {
    return (
      <NextLink href={href} className={`${buttonVariants({ variant })} px-0`}>
        {displayLabel}
      </NextLink>
    );
  }

  return displayLabel;
}

function TopLevelDesktopDropdownContainer({
  links,
  level
}: { links: Link[]; level: number }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link) =>
          link.links?.length ? (
            <NavigationMenuItem key={`menu-${level}-${link.id}`} className="relative">
              <NavigationMenuTrigger>
                <DesktopDropdownLink
                  variant="link"
                  {...link}
                ></DesktopDropdownLink>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <RecurseNavItems links={link.links} level={1} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`menu-${level}-${link.id}`}>
              <DesktopDropdownLink
                key={`menu-link-${level}-${link.id}`}
                variant="link"
                {...link}
              />
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NestedDesktopDropdownContainer({
  links,
  level
}: { links: Link[]; level: number }) {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li
          key={`submenu-${level}-${link.id}`}
          className={link.separator ? '' : styles.item}
        >
          {link.links?.length ? (
            <HoverCard openDelay={0}>
              <HoverCardTrigger className={styles.trigger}>
                <div className="flex items-center gap-2 justify-between">
                  {link.label} <ChevronRight size={12} />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="right"
                className={styles.hoverCard}
                sideOffset={20}
              >
                <RecurseNavItems links={link.links} level={level + 1} />
              </HoverCardContent>
            </HoverCard>
          ) : link.separator ? (
            <DropdownMenuSeparator className={styles.separator} />
          ) : (
            link.label
          )}
        </li>
      ))}
    </ul>
  );
}

function RecurseNavItems({
  links = [],
  level = 0
}: { links: Link[]; level?: number }) {
  const Container =
    level === 0
      ? TopLevelDesktopDropdownContainer
      : NestedDesktopDropdownContainer;
  return <Container level={level} links={links} />;
}

interface DesktopMenuProps {
  links: Link[];
}

function DesktopMenu({ links = [] }: DesktopMenuProps) {
  return (
    <div className={styles.desktopNavContainer}>
      <Logo />
      <RecurseNavItems links={links} />
      <Avatar>
        <AvatarFallback>LH</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default DesktopMenu;
