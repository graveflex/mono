import type { File, IconSelect, Page } from '@mono/types/payload-types';
import { Button } from '@mono/web/components/ui/Button';
import type { SerializedLinkNode } from '@payloadcms/richtext-lexical';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import Link from 'next/link';

export interface PayLoadLink {
  type?: ('internal' | 'external' | 'email' | 'phone' | 'file') | null;
  label?: string | null;
  internalUrl?: (number | null) | Page;
  externalUrl?: string | null;
  emailUrl?: string | null;
  phoneUrl?: string | null;
  fileUrl?: (number | null) | File;
  newTab?: boolean | null;
  icon?: IconSelect;
  file?: File;
  buttonStyle?: 'default' | 'secondary' | 'outline';
}

const getLinkByType = ({
  payloadLink
}: { payloadLink: PayLoadLink }): string => {
  switch (payloadLink?.type) {
    case 'external':
      return !isNil(payloadLink?.externalUrl) ? payloadLink?.externalUrl : '#';
    case 'internal':
      return !isNumber(payloadLink?.internalUrl) &&
        !isNil(payloadLink?.internalUrl?.slug)
        ? payloadLink?.internalUrl?.slug
        : '#';
    case 'email':
      return !isNil(payloadLink?.emailUrl)
        ? `mailto:${payloadLink?.emailUrl}`
        : '#';
    case 'phone':
      return !isNil(payloadLink?.phoneUrl)
        ? `tel:+1${payloadLink?.phoneUrl}`
        : '#';
    case 'file':
      return !isNil(payloadLink?.file?.url) ? payloadLink?.file?.url : '#';
    default:
      return '/';
  }
};

const LinkConverter = ({ node }: { node: SerializedLinkNode }) => {
  const payloadLink: PayLoadLink = node?.fields;
  const linkUrl = getLinkByType({ payloadLink });
  // @ts-expect-error
  const text = node?.children?.[0]?.text;

  switch (node?.fields?.appearance) {
    case 'button':
      return (
        <Button
          asChild={true}
          type="button"
          variant={payloadLink?.buttonStyle}
          className="mb-2 last:mb-0 sm:mb-0"
        >
          <Link href={linkUrl}>{text}</Link>
        </Button>
      );
    default:
      return <Link href={linkUrl}>{text}</Link>;
  }
};

export default LinkConverter;
