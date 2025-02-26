import OAuthProviderList from '@mono/web/components/OAuthProviderList';
import { Separator } from '@mono/web/components/ui/Separator';

import SignInForm from './SignInForm';
import { signIn } from './actions';

interface SignInProps {
  searchParams: Promise<{
    callbackUrl?: string;
    error?: string;
    email?: string;
  }>;
}

async function SignIn({ searchParams }: SignInProps) {
  const { callbackUrl } = await searchParams;
  return (
    <>
      {/* Sign-in form container */}
      <div className="w-full max-w-sm space-y-6 m-auto">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-muted-foreground text-sm">
            Log in to unlock tailored content and stay connected with your
            community.
          </p>
        </div>

        <OAuthProviderList callbackUrl={callbackUrl} />

        {/* Separator */}
        <div className="w-full relative">
          <div className="text-xs text-muted-foreground bg-background px-2 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Or
          </div>
          <Separator />
        </div>

        {/* Sign-in form */}
        <SignInForm signIn={signIn} />
      </div>
    </>
  );
}

export default SignIn;
