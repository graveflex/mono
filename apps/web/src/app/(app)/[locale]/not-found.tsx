'use client';

import { cn } from '@mono/web/lib/utils';
import { useSearchParams } from 'next/navigation';

import nextDynamic from 'next/dynamic';

// TODO: After footer is implemented, uncomment the following line
// import Footer from '@mono/web/components/Footer';

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

async function NotFound() {
  const VariantComponent = Variants[Variant];

  return (
    <div className={cn(searchTheme || Theme, 'min-h-full grid items-center')}>
      <VariantComponent />
      {/* TODO: After footer is implemented, uncomment the following line */}
      {/* <Footer /> */}
    </div>
  );
}

export default NotFound;
