// Single point of entry for all auth related functions

import type { Creds } from '@mono/web/lib/auth/session/server';
import { createPayloadAuthSessionWithEmailCreds } from '@mono/web/lib/auth/session/server';

import {
  providerMap,
  sendPasswordResetEmail,
  signUp
} from '@mono/web/lib/auth/config';

import { signInEvent, signOutEvent } from '@mono/web/lib/auth/events';

import {
  EmailRequiredError,
  InvalidLoginError,
  PasswordRequiredError
} from '@mono/web/lib/auth/errors';

export {
  createPayloadAuthSessionWithEmailCreds,
  providerMap,
  signUp,
  sendPasswordResetEmail,
  signInEvent,
  signOutEvent,
  EmailRequiredError,
  PasswordRequiredError,
  InvalidLoginError
};

export type { Creds };
