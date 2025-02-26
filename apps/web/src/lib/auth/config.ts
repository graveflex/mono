// All AuthConfig related information is now in this file;

import { signIn } from '@mono/web/auth';
// Libraries
import { getPayload } from 'payload';
import { ZodError } from 'zod';

import { authConfig } from '@mono/web/auth.config';
import { SIGNUP_URL } from '@mono/web/lib/constants';
import { passwordSchema, signInSchema } from '@mono/web/lib/zod';
// Constants
import payloadConfig from '@payload-config';

// Types

// Functions

export const providerMap = authConfig.providers
  .map((provider) => {
    if (typeof provider === 'function') {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    }
    return { id: provider.id, name: provider.name };
  })
  .filter((provider) => provider.id !== 'credentials');

export const signUp = async (formData: FormData) => {
  // TODO: validate form data w/ zod
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const zodTest = { email, password };
  try {
    signInSchema.parse(zodTest);
  } catch (error) {
    if (error instanceof ZodError) {
      if (error.errors[0].path[0] === 'email') {
        throw new Error('invalid-email');
      }
      if (error.errors[0].path[0] === 'password') {
        throw new Error('invalid-password');
      }
    }
  }

  const payload = await getPayload({ config: payloadConfig });

  const existingEmailProviderAccount = await payload.find({
    collection: 'userEmailProviders',
    where: { email: { equals: email } },
    limit: 1
  });

  if (existingEmailProviderAccount.docs.length) {
    throw new Error('email-exists');
  }

  const account = await payload.create({
    collection: 'userEmailProviders',
    data: {
      email: email,
      password: password
    }
  });

  await signIn('credentials', formData);
  return account.user;
};
export const sendPasswordResetEmail = async (formData: FormData) => {
  const email = formData.get('email') as string;

  if (!email) {
    throw new Error('email-required');
  }

  const payload = await getPayload({ config: payloadConfig });

  const existingEmailProviderAccount = await payload.find({
    collection: 'userEmailProviders',
    where: { email: { equals: email } },
    limit: 1
  });

  if (existingEmailProviderAccount.docs.length) {
    await payload.forgotPassword({
      collection: 'userEmailProviders',
      data: {
        email
      }
    });
  } else {
    const existingEmailInOtherProviders = await payload.find({
      collection: 'users',
      where: { email: { equals: email } },
      limit: 1
    });

    if (existingEmailInOtherProviders.docs.length) {
      const { accounts } = existingEmailInOtherProviders.docs[0];
      if (!accounts || !accounts.length) {
        throw new Error('email-not-found');
      }

      const { provider } = accounts[0];

      return {
        status: 'found_oauth',
        provider,
        message: `You already have an account with this email address. Please sign in with ${provider}`
      };
    }

    throw new Error('email-not-found');
  }

  return {
    message: 'Check your email!'
  };
};

export const resetPassword = async (formData: FormData) => {
  const password = formData.get('password') as string;
  const token = formData.get('token') as string;

  if (!password) {
    throw new Error('password-required');
  }

  const zodTest = { password };
  try {
    passwordSchema.parse(zodTest);
  } catch (error) {
    if (error instanceof ZodError) {
      if (error.errors[0].path[0] === 'password') {
        throw new Error('invalid-password');
      }
    }
  }

  if (!token) {
    throw new Error('token-required');
  }

  const payload = await getPayload({ config: payloadConfig });

  const result = await payload.resetPassword({
    collection: 'userEmailProviders',
    data: {
      password,
      token
    },
    overrideAccess: true
  });

  return {
    message: 'Password reset successfully!',
    result
  };
};
