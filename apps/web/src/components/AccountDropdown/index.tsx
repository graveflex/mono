'use client';

import type { User } from '@mono/types/payload-types';
import { Avatar, AvatarFallback } from '@mono/web/components/ui/Avatar';
import { Button } from '@mono/web/components/ui/Button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@mono/web/components/ui/NavigationMenu';
import {
  PAYLOAD_USER_TYPE_COOKIE_NAME,
  SESSION_COOKIE_NAMES
} from '@mono/web/lib/constants';
import { useCookieValue } from '@mono/web/lib/useCookieValue';
import { useDeleteCookie } from 'cookies-next';
import { LoaderIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePayloadSession } from 'payload-authjs/client';
import { useEffect, useState } from 'react';
import styles from './AccountDropdown.module.css';

// TODO: make utility?
async function loadUserData() {
  const meUserReq = await fetch('/api/users/me');
  let { user } = await meUserReq.json();

  if (!user) {
    const { session } = usePayloadSession();
    user = session?.user;
  }

  return user;
}

function AccountDropdown() {
  const deleteCookie = useDeleteCookie();
  const userType = useCookieValue(PAYLOAD_USER_TYPE_COOKIE_NAME);
  const authUserType = useCookieValue('auth-provider');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userType || authUserType) {
      setLoading(true);

      (async () => {
        const nextUser = await loadUserData();
        setUser(nextUser);
        setLoading(false);
      })();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [userType, authUserType]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <LoaderIcon size="1.5rem" className="animate-spin" />
      </div>
    );
  }

  if (user) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger disableHoverStyles={true}>
              <Avatar className={styles.avatar}>
                <AvatarFallback>{user.email.substring(0, 2)}</AvatarFallback>
              </Avatar>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href="/account" legacyBehavior={true} passHref={true}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Account
                </NavigationMenuLink>
              </Link>

              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                onClick={async () => {
                  SESSION_COOKIE_NAMES.forEach((cookie) => {
                    deleteCookie(cookie);
                  });
                  await signOut({ redirect: true, redirectTo: '/login' });
                }}
              >
                Sign Out
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <Button className={styles.signIn} type="button" asChild={true}>
      <Link href="/login">Sign In</Link>
    </Button>
  );
}

export default AccountDropdown;
