import type { User as PayloadUser } from '@mono/types/payload-types';
import type { SignInEventType } from '@mono/web/lib/auth/events';
import { signInEvent, signOutEvent } from '@mono/web/lib/auth/events';
import { createPayloadAuthSessionWithEmailCreds } from '@mono/web/lib/auth/session/server';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import type { PayloadAuthjsUser } from 'payload-authjs';

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        if (!email) {
          throw new Error('email-required');
        }
        if (!password) {
          throw new Error('password-required');
        }
        const user = await createPayloadAuthSessionWithEmailCreds(credentials);
        if (!user) {
          throw new Error('invalid-credentials');
        }

        return user as PayloadAuthjsUser<PayloadUser>;
      }
    })
  ],
  events: {
    signIn: async (event: SignInEventType) => {
      await signInEvent(event);
    },
    signOut: async () => {
      await signOutEvent();
    }
  },
  pages: {
    signIn: '/login'
  }
};
