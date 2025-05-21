import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import PageThemeObserver from '@mono/web/components/PageThemeObserver';
import { routing } from '@mono/web/i18n/routing';
import {
  DEFAULT_LOCALE,
  LOCALES,
  type LanguageLocale
} from '@mono/web/lib/constants';
import { redirectApi } from '@mono/web/lib/redirectApi';
import config from '@payload-config';
import { setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { type PayloadRequest, getPayload } from 'payload';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;
export interface RootLayoutProps {
  params: Promise<{
    slug: string[];
    locale: LanguageLocale;
    draft?: boolean;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// TODO: abstract this into a generic helper function
async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale,
  pageSlug: string
) {
  const payload = await getPayload({ config });
  let user;

  // we need to pass the current user to the local API request, otherwise
  // payload won't be able to perform access control correctly
  if (draft) {
    const requestHeaders = await headers();
    const me = await payload.auth({
      headers: requestHeaders,
      req: {} as PayloadRequest
    });

    // only admins should be able to see drafts
    if (!me?.permissions?.canAccessAdmin) {
      notFound();
    }

    user = me.user;
  }

  const data = await payload.find({
    collection: 'pages',
    locale,
    draft,
    depth: 3,
    user,
    overrideAccess: false,
    where: { slug: { equals: pageSlug } },
    limit: 1
  });

  return data.docs[0];
}

export default async function CatchallPage({ params }: RootLayoutProps) {
  const { slug, locale: localeOrSlug = DEFAULT_LOCALE, draft } = await params;
  let pageSlug = slug.join('/');
  let locale = localeOrSlug;
  if (LOCALES.includes(pageSlug as LanguageLocale)) {
    pageSlug = locale;
    locale = DEFAULT_LOCALE;
  }
  setRequestLocale(locale);
  const page = await fetchPageData(draft, locale, pageSlug);

  // if not page data and not the index check for redirects
  // TODO: generalize this into a helper function
  if (!page) {
    const redirectPath = await redirectApi(pageSlug);
    if (
      !redirectPath ||
      (typeof redirectPath === 'object' && 'error' in redirectPath)
    ) {
      return notFound();
    }
    redirect(redirectPath);
  }

  return (
    <>
      <PageThemeObserver theme={page.theme} />
      <BlocksRenderer blocks={page.blocks ?? []} />
    </>
  );
}

export async function generateMetadata({ params }: RootLayoutProps) {
  const { draft, slug, locale } = await params;
  const pageSlug = slug ? slug.join('/') : '/';
  const data = await fetchPageData(draft, locale, pageSlug);
  if ((data && 'error' in data) || !data) {
    return {};
  }
  const pageData = data;
  const seoData = data?.meta;
  const seoImage =
    typeof seoData?.image !== 'number' && seoData?.image?.url
      ? seoData?.image?.url
      : 'https://ut94wx32cwlqjiry.public.blob.vercel-storage.com/opengraph-IaDqdUZAHTyyH8EfsPaH2oiQFN50MG.jpg';
  return {
    title: seoData?.title || pageData?.pageTitle || 'Monorepo',
    description: seoData?.description || 'Default description text',
    keywords: null,
    openGraph: {
      images: [seoImage]
    }
  };
}
