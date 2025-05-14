'use client';

import { cn } from '@mono/web/lib/utils';
import nextDynamic from 'next/dynamic';

const defaultVariant = '1';
const defaultTheme = 'light';

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

async function NotFound() {
  const VariantComponent = Variants[defaultVariant];

  return (
    <div className={cn(defaultTheme, 'min-h-full grid items-center')}>
      <VariantComponent />
    </div>
  );
}

export default NotFound;
