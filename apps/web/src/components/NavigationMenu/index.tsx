import type { ButtonProps } from '@mono/web/components/ui/Button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuSub,
  NavigationMenuTrigger
} from '@radix-ui/react-navigation-menu';
import styles from './NavigationMenu.module.css';

export type Link = {
  label?: string | null;
  href?: string;
  separator?: boolean;
  links?: Link[];
  variant?: ButtonProps['variant'];
};

export interface NavigationMenuProps {
  link: Link;
}

const NestedNavigationMenu = (_props: NavigationMenuProps) => {
  return (
    <NavigationMenu className={styles.container}>
      <NavigationMenuList className={styles.list}>
        <NavigationMenuItem className={styles.item}>
          <NavigationMenuTrigger className={styles.trigger}>
            Item one
          </NavigationMenuTrigger>
          <NavigationMenuContent className={styles.content}>
            Item one content
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={styles.item}>
          <NavigationMenuTrigger className={styles.trigger}>
            Item two
          </NavigationMenuTrigger>
          <NavigationMenuContent className={styles.content}>
            <NavigationMenuSub className={styles.sub} defaultValue="sub1">
              <NavigationMenuList className={styles.menu}>
                <NavigationMenuItem className={styles.item} value="sub1">
                  <NavigationMenuTrigger className={styles.trigger}>
                    Sub item one
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className={styles.content}>
                    <NavigationMenuList className={styles.menu}>
                      <NavigationMenuItem className={styles.item}>
                        <NavigationMenuLink>
                          Sub item one content
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className={styles.item} value="sub2">
                  <NavigationMenuTrigger className={styles.trigger}>
                    Sub item two
                  </NavigationMenuTrigger>
                  <NavigationMenuList className={styles.menu}>
                    <NavigationMenuItem className={styles.item}>
                      <NavigationMenuLink>
                        Sub item two content
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuSub>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NestedNavigationMenu;
