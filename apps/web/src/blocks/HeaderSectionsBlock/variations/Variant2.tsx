'use client';

import type { HeaderSectionsBlockType } from '@mono/web/blocks/HeaderSectionsBlock';
import RichText from '@mono/web/components/RichText/index';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@mono/web/components/ui/Breadcrumb';
import startCase from 'lodash/startCase';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';

export default function Variant2({ content }: HeaderSectionsBlockType) {
  const pathname = usePathname();
  const parsedPathname = pathname.split('/');

  const Breadcrumbs = useMemo(() => {
    const pathLength = parsedPathname?.length;
    return (
      <Breadcrumb aria-label="Page navigation">
        <BreadcrumbList>
          {parsedPathname?.map((path, idx) => {
            const url = path === '' ? '/' : path;
            const urlName = path === '' ? 'Home' : startCase(path);
            return (
              <React.Fragment key={path}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={url}>{urlName}</BreadcrumbLink>
                </BreadcrumbItem>
                {idx + 1 !== pathLength && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }, [parsedPathname]);

  return (
    <section className="bg-background" aria-labelledby="page-heading">
      {Breadcrumbs}
      {content && <RichText data={content} />}
    </section>
  );
}
