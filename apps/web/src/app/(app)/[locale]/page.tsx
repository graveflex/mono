import BlocksRenderer from '@mono/web/components/BlocksRenderer';
import PageThemeObserver from '@mono/web/components/PageThemeObserver';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { setRequestLocale } from 'next-intl/server';
import { getPayload } from 'payload';
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

async function fetchPageData(
  draft: boolean | undefined,
  locale: LanguageLocale
) {
  const payload = await getPayload({ config });
  return payload.findGlobal({
    slug: 'homepage',
    locale,
    draft,
    depth: 2,
    fallbackLocale: DEFAULT_LOCALE
  });
}

export default async function HomePage(props: RootLayoutProps) {
  const { locale = DEFAULT_LOCALE, draft } = await props.params;
  const homepageData = await fetchPageData(draft, locale);

  return (
    <>
      <PageThemeObserver theme={homepageData.theme} />
      <BlocksRenderer blocks={homepageData.blocks ?? []} />
    </>
  );
}

export async function generateMetadata(props: RootLayoutProps) {
  const { draft, locale } = await props.params;

  setRequestLocale(locale);
  const data = await fetchPageData(draft, locale);

  if ((data && 'error' in data) || !data) {
    return {};
  }

  const seoImage =
    'https://ut94wx32cwlqjiry.public.blob.vercel-storage.com/opengraph-IaDqdUZAHTyyH8EfsPaH2oiQFN50MG.jpg';

  return {
    title: data.pageTitle ?? 'Monorepo',
    description: 'Default description text',
    keywords: null,
    openGraph: {
      images: [seoImage]
    }
  };
}
