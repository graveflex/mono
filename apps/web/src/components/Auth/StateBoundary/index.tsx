'use client';

import { Alert } from '@mono/web/components/ui/Alert';
import { SIGNIN_URL } from '@mono/web/lib/constants';

import { Separator } from '@mono/web/components/ui/Separator';

interface StateConfig {
  variant: 'default' | 'destructive'; // add other variants as needed
  title: string;
  description: string;
  link?: {
    href: string;
    text: string;
  };
}
const States: Record<string, StateConfig> = {
  'email-sent': {
    variant: 'default',
    title: 'Email Sent',
    description:
      'An email has been sent to your email address with instructions to reset your password.'
  },
  'password-reset': {
    variant: 'default',
    title: 'Password Reset',
    description:
      'Your password has been reset. You can now sign in with your new password.',
    link: {
      text: 'Login here',
      href: SIGNIN_URL
    }
  },
  'account-created': {
    variant: 'default',
    title: 'Account Created',
    description: 'Your account has been created.'
  },
  'account-verified': {
    variant: 'default',
    title: 'Account Verified',
    description: 'Your account has been verified.'
  },
  'logged-in': {
    variant: 'default',
    title: 'Logged In',
    description: 'You have been logged in.'
  },
  'signed-out': {
    variant: 'default',
    title: 'Signed Out',
    description: 'You have been signed out.'
  }
} as const;

type StateKeys = keyof typeof States;
type AuthStateBoundaryProps = {
  state: string;
  divider?: boolean;
};

const isValidState = (state: string): state is StateKeys => {
  return state in States;
};

export default function AuthStateBoundary({
  state,
  divider = true
}: AuthStateBoundaryProps) {
  if (state) {
    const fallback = {
      variant: 'default',
      title: 'State',
      description: state,
      link: false
    } as const;
    const { variant, title, description, link } =
      state && isValidState(state) ? States[state] : fallback;
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
        {divider && (
          <div className="w-full relative my-4">
            <div className="text-xs text-muted-foreground bg-background px-2 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Or */}
            </div>
            <Separator />
          </div>
        )}
      </>
    );
  }

  return null;
}
