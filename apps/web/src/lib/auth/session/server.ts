// Single point of entry for all auth session related server functions

type Creds = Partial<Record<'email' | 'password', unknown>>;
import {
  EmailRequiredError,
  InvalidLoginError,
  PasswordRequiredError
} from '@mono/web/lib/auth/errors';
import { cookies } from 'next/headers';

const createPayloadAuthSessionWithEmailCreds = async ({
  email,
  password
}: Creds) => {
  if (typeof email !== 'string') {
    throw new EmailRequiredError();
  }
  if (typeof password !== 'string') {
    throw new PasswordRequiredError();
  }

  const { getPayload } = require('payload');
  const config = require('@payload-config');
  const payload = await getPayload({ config });
  const account = await payload.login({
    collection: 'userEmailProviders',
    data: {
      email,
      password
    }
  });

  if (account.token) {
    const cookieStore = await cookies();
    const cookieName = `${payload.config.cookiePrefix}-token`;
    cookieStore.set(cookieName, account.token, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    });
    return account.user.user;
  }

  throw new InvalidLoginError();
};

export { createPayloadAuthSessionWithEmailCreds };
export type { Creds };
