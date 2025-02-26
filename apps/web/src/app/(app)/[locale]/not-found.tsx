'use client';

import { cn } from '@mono/web/lib/utils';
import { useSearchParams } from 'next/navigation';

import nextDynamic from 'next/dynamic';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;

const Variant = '1';
const Theme = 'light';

const defaultOpts = {
  suspense: true,
  ssr: true
};

const Variants = {
  '1': nextDynamic(
    () => import('@mono/web/components/NotFound/variations/Variant1'),
    { ...defaultOpts }
  ),
  '2': nextDynamic(
    () => import('@mono/web/components/NotFound/variations/Variant2'),
    { ...defaultOpts }
  ),
  '3': nextDynamic(
    () => import('@mono/web/components/NotFound/variations/Variant3'),
    { ...defaultOpts }
  )
};

export default function NotFound() {
  const searchParams = useSearchParams();
  const variant = searchParams.get('variant') as keyof typeof Variants;
  const searchTheme = searchParams.get('theme');

  let VariantComponent = Variants[Variant];
  if (variant) {
    if (!Variants[variant]) {
      VariantComponent = Variants['1'];
    } else {
      VariantComponent = Variants[variant];
    }
  }
  return (
    <div className={cn(searchTheme || Theme, 'min-h-full grid items-center')}>
      <VariantComponent />
    </div>
  );
}
