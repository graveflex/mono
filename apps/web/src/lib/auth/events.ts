// Single Point of Entry for all auth event related information

import {
  PAYLOAD_USER_TYPE_COOKIE_NAME,
  SESSION_COOKIE_NAMES
} from '@mono/web/lib/constants';
import { deleteCookie } from 'cookies-next/client';
import { setCookie } from 'cookies-next/server';
import type { Account, Profile, User } from 'next-auth';
import { cookies } from 'next/headers';

export type SignInEventType = {
  user?: User;
  account?: Account | null;
  profile?: Profile;
  isNewUser?: boolean;
};

export const signInEvent = async (event: SignInEventType) => {
  const { user, account } = event;
  if (!user) {
    throw new Error('User is required');
  }

  setCookie(PAYLOAD_USER_TYPE_COOKIE_NAME, 'users', { cookies });
  if (user.id) {
    if (account?.provider) {
      const cookieStore = await cookies();
      cookieStore.set('auth-provider', account?.provider, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
    }
    return;
  }
};

export const signOutEvent = async () => {
  SESSION_COOKIE_NAMES.forEach((cookie) => {
    deleteCookie(cookie);
  });
};
