import Layout from '@mono/web/globals/Layout';
import { routing } from '@mono/web/i18n/routing';
import type { LanguageLocale } from '@mono/web/lib/constants';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import type React from 'react';
import '../../global.css';

import { Toaster } from '@mono/web/components/ui/Toaster';
import Providers from './providers';

export const dynamic = 'auto';
export const revalidate = 60;
export const runtime = 'nodejs';

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: LanguageLocale;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head />

      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Layout locale={locale}>{children}</Layout>
            <Toaster />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
