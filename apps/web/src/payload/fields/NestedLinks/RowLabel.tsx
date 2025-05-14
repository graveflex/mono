'use client';

import { useRowLabel } from '@payloadcms/ui';
import type { RowLabelComponent } from 'payload';

// from the payload docs: https://payloadcms.com/docs/fields/array#row-label
export const ArrayRowLabel = (() => {
  const { data, rowNumber } = useRowLabel<{ text?: string }>();
  const displayNumber = String((rowNumber ?? 0) + 1).padStart(2, '0');
  const customLabel = `${displayNumber} | ${data.text || 'Link'}`;

  return <>{customLabel}</>;
}) as unknown as RowLabelComponent; // unsure why this type coersion is necessary - seems to be a payload bug
