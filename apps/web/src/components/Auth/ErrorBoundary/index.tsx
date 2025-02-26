'use client';

import { Alert } from '@mono/web/components/ui/Alert';

import { Separator } from '@mono/web/components/ui/Separator';
import { SIGNIN_URL } from '@mono/web/lib/constants';

interface ErrorConfig {
  variant: 'default' | 'destructive'; // add other variants as needed
  title: string;
  description: string;
  link?: {
    href: string;
    text: string;
  };
}
const Errors: Record<string, ErrorConfig> = {
  'email-exists': {
    variant: 'destructive',
    title: 'Email already exists',
    description: 'The email you entered is already associated with an account.'
  },
  'invalid-email': {
    variant: 'destructive',
    title: 'Invalid email',
    description: 'The email you entered is invalid.'
  },
  'invalid-password': {
    variant: 'destructive',
    title: 'Invalid password',
    description:
      'The password you entered is invalid. Please make sure it is at least 8 characters long.'
  },
  'invalid-credentials': {
    variant: 'destructive',
    title: 'Invalid credentials',
    description: 'The email or password you entered is incorrect.'
  },
  'email-required': {
    variant: 'destructive',
    title: 'Email required',
    description: 'Please enter your email address.'
  },
  'password-required': {
    variant: 'destructive',
    title: 'Password required',
    description: 'Please enter your password.'
  },
  'unknown-error': {
    variant: 'destructive',
    title: 'Unknown error',
    description: 'An unknown error occurred. Please try again.'
  },
  'locked-user': {
    variant: 'destructive',
    title: 'Account locked',
    description: 'Your account has been locked. Please contact support.'
  },
  'email-not-found': {
    variant: 'destructive',
    title: 'Email not found',
    description: 'The email you entered is not associated with any account.'
  }
} as const;

type ErrorKeys = keyof typeof Errors;
type AuthErrorBoundaryProps = {
  error: string;
};

const isValidError = (err: string): err is ErrorKeys => {
  return err in Errors;
};

export default function AuthErrorBoundary({ error }: AuthErrorBoundaryProps) {
  if (error) {
    const fallback = {
      variant: 'destructive',
      title: 'Error',
      description: error,
      link: false
    } as const;

    let { variant, title, description, link } =
      error && isValidError(error) ? Errors[error] : fallback;

    if (error && error.startsWith('found_oauth')) {
      const [_, provider, message] = error.split(':');
      title = 'Account found';
      description = message;
      link = {
        href: SIGNIN_URL,
        text: `Sign in with ${provider}`
      };
    }

    return (
      <>
        <Alert variant={variant}>
          <h1 className="text-sm font-semibold [&+div]:text-xs">{title}</h1>
          <p className="text-sm opacity-90 mt-2">{description}</p>
          {link && (
            <a className="underline text-foreground" href={link.href}>
              {link.text}
            </a>
          )}
        </Alert>
        {/* Separator */}
        <div className="w-full relative my-4">
          <div className="text-xs text-muted-foreground bg-background px-2 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Or */}
          </div>
          <Separator />
        </div>
      </>
    );
  }

  return null;
}
