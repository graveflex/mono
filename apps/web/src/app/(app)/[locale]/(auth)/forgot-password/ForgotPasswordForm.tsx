'use client';

import AuthErrorBoundary from '@mono/web/components/Auth/ErrorBoundary';
import { Button } from '@mono/web/components/ui/Button';
import { Input } from '@mono/web/components/ui/Input';
import Link from 'next/link';
import { useActionState } from 'react';

import AuthStateBoundary from '@mono/web/components/Auth/StateBoundary';
import { SIGNIN_URL, SIGNUP_URL } from '@mono/web/lib/constants';

const initialState = {
  errorCode: '',
  email: '',
  success: false
};

interface ForgotPasswordFormProps {
  forgotPassword: (
    prevState: unknown,
    formData: FormData
  ) => Promise<{ errorCode: string; success?: boolean; email: string }>;
}

function ForgotPasswordForm({ forgotPassword }: ForgotPasswordFormProps) {
  const [message, formAction, pending] = useActionState(
    forgotPassword,
    initialState
  );

  return (
    <form className="w-full max-w-sm space-y-6 m-auto" action={formAction}>
      <AuthErrorBoundary error={message?.errorCode || ''} />
      <AuthStateBoundary state={message?.success ? 'email-sent' : ''} />

      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email address. If we have find an account matching your
          email, we will send you a secure sign-in link to the specified email
          address.
        </p>
      </div>

      {/* Email and password inputs */}
      <div className="space-y-4">
        <Input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          defaultValue={message?.email}
          disabled={pending || message?.success}
        />
      </div>

      {/* Forgot Password button */}
      <Button className="w-full">Submit</Button>

      {/* Sign-up link */}
      <p className="text-sm text-center text-muted-foreground">
        Don't have an account?{' '}
        <Link className="underline text-foreground" href={SIGNUP_URL}>
          Sign up
        </Link>
      </p>
      {/* Sign-up link */}
      <p className="text-sm text-center text-muted-foreground">
        Already have an account?{' '}
        <Link className="underline text-foreground" href={SIGNIN_URL}>
          Sign in
        </Link>
      </p>
    </form>
  );
}

export default ForgotPasswordForm;
