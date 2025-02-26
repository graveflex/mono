'use client';

import AuthErrorBoundary from '@mono/web/components/Auth/ErrorBoundary';
import { Button } from '@mono/web/components/ui/Button';
import { Input } from '@mono/web/components/ui/Input';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';

import AuthStateBoundary from '@mono/web/components/Auth/StateBoundary';
import { SIGNIN_URL, SIGNUP_URL } from '@mono/web/lib/constants';

const initialState = {
  errorCode: '',
  success: false
};

interface ResetPasswordFormProps {
  resetPassword: (
    prevState: unknown,
    formData: FormData
  ) => Promise<{ errorCode: string; success?: boolean }>;
  token?: string;
}

function ResetPasswordForm({ resetPassword, token }: ResetPasswordFormProps) {
  const [message, formAction, pending] = useActionState(
    resetPassword,
    initialState
  );

  return (
    <form className="w-full max-w-sm space-y-6 m-auto" action={formAction}>
      <AuthErrorBoundary error={message?.errorCode || ''} />
      <AuthStateBoundary state={message?.success ? 'password-reset' : ''} />

      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-muted-foreground text-sm">
          Enter your new password below to reset your password.
        </p>
      </div>

      {/* Token input */}
      <Input id="token" name="token" type="hidden" value={token} />

      {/* Password input */}
      <div className="space-y-2">
        <Input
          id="password"
          name="password"
          placeholder="New Password"
          type="password"
          disabled={pending || message?.success}
        />
        <p className="text-sm text-muted-foreground">Minimum 8 characters.</p>
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

export default ResetPasswordForm;
