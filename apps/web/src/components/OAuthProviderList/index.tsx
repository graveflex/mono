import { signIn } from '@mono/web/auth';
import { Button } from '@mono/web/components/ui/Button';
import { providerMap } from '@mono/web/lib/auth/config';
import { ACCOUNT_URL } from '@mono/web/lib/constants';
import { AuthError } from 'next-auth';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
interface OAuthProviderListProps {
  callbackUrl?: string;
  label?: string;
}

// TODO: make utility?
const defaultOpts = {
  suspense: true,
  ssr: true
};
const ProviderIconsImport = {
  github: dynamic(() => import('./icons/GitHub'), { ...defaultOpts })
};

const isValidProvider = (
  provider: string
): provider is keyof typeof ProviderIconsImport => {
  return provider in ProviderIconsImport;
};

const ProviderIcons = (provider: string) => {
  if (!isValidProvider(provider)) {
    return null;
  }

  const Icon = ProviderIconsImport[provider];

  // Do we have a global theme context?
  return <Icon theme="light" />;
};

function OAuthProviderList(props: OAuthProviderListProps) {
  return Object.values(providerMap).map((provider) => (
    <form
      key={provider.id}
      action={async () => {
        'use server';
        try {
          await signIn(provider.id, {
            redirectTo: props.callbackUrl ?? `${ACCOUNT_URL}?logged-in=true`
          });
        } catch (error) {
          // Signin can fail for a number of reasons, such as the user
          // not existing, or the user not having the correct role.
          // In some cases, you may want to redirect to a custom error
          if (error instanceof AuthError) {
            return redirect(`/oauth-error?error=${error.type}`);
          }

          // Otherwise if a redirects happens Next.js can handle it
          // so you can just re-thrown the error and let Next.js handle it.
          // Docs:
          // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
          throw error;
        }
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        {ProviderIcons(provider.name.toLowerCase())}

        <span>
          {props.label ? props.label : 'Sign in'} with {provider.name}
        </span>
      </Button>
    </form>
  ));
}

export default OAuthProviderList;
