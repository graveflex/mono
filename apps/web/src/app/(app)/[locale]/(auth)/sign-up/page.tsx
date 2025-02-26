import OAuthProviderList from '@mono/web/components/OAuthProviderList';
import { Separator } from '@mono/web/components/ui/Separator';
import SignUpForm from './SignUpForm';
import { signUp } from './actions';

interface SignUpProps {
  searchParams: Promise<{
    callbackUrl?: string;
  }>;
}

async function SignUp({ searchParams }: SignUpProps) {
  const { callbackUrl } = await searchParams;
  return (
    <div className="w-full max-w-sm space-y-6 m-auto">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          Create an account
        </h1>
        <p className="text-muted-foreground text-sm">
          Let's get started. Fill in the details below to create your account.
        </p>
      </div>

      {/* OAuth provider list */}
      <OAuthProviderList callbackUrl={callbackUrl} label="Sign up" />

      {/* Separator */}
      <div className="w-full relative">
        <div className="text-xs text-muted-foreground bg-background px-2 uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Or
        </div>
        <Separator />
      </div>

      <SignUpForm signUp={signUp} />
    </div>
  );
}

export default SignUp;
