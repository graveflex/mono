// Libraries
import NextAuth from 'next-auth';
import { withPayload } from 'payload-authjs';

// Constants
import { authConfig } from '@mono/web/auth.config';
import payloadConfig from '@payload-config';

export const { handlers, signIn, signOut, auth } = NextAuth(
  withPayload(authConfig, {
    payloadConfig
  })
);
