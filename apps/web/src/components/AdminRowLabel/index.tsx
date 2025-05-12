import type { PayLoadLink } from '@mono/types/payload-types';
import { useRowLabel } from '@payloadcms/ui/forms/RowLabel/Context';
import React from 'react';

const AdminRowLabel = function ArrayRowLabel() {
  const { data, rowNumber } = useRowLabel<{
    link: PayLoadLink;
    name: string;
    href: string;
    title: string;
    label: string;
  }>();
  const linkLabel = data?.link?.text;
  if (data?.name) {
    return (
      <div>
        {rowNumber} {data?.name}
      </div>
    );
  }
  if (data?.title) {
    return <div>{data?.title}</div>;
  }
  if (linkLabel) {
    return <div>{linkLabel}</div>;
  }
  if (data?.label) {
    return <div>{data?.label}</div>;
  }
  return <div>Link: {data?.href ?? rowNumber}</div>;
};

export default AdminRowLabel;
