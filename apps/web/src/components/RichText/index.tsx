import type {
  File,
  IconSelect,
  Page,
  CtaSectionsBlockT as PayloadType
} from '@mono/types/payload-types';
import Form from '@mono/web/components/Form';
import { Button } from '@mono/web/components/ui/Button';
import { cn } from '@mono/web/lib/utils';
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode
} from '@payloadcms/richtext-lexical';
import {
  type JSXConvertersFunction,
  RichText as LexicalRichText
} from '@payloadcms/richtext-lexical/react';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import Link from 'next/link';
import React from 'react';
import styles from './RichText.module.css';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

export type RichTextType = {
  data?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  className?: string;
};

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

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  eyebrow: ({ node }) => {
    return <span className={cn(styles.eyebrow, 'eyebrow')}>{node?.text}</span>;
  },
  link: ({ node }: { node: SerializedLinkNode }) => {
    const payloadLink: PayLoadLink = node?.fields;
    const linkUrl = getLinkByType({ payloadLink });

    switch (node?.fields?.appearance) {
      case 'button':
        return (
          <Button
            asChild={true}
            type="button"
            variant={payloadLink?.buttonStyle}
          >
            <Link href={linkUrl}>{node?.children?.[0]?.text}</Link>
          </Button>
        );
      default:
        return <Link href={linkUrl}>{node?.children?.[0]?.text}</Link>;
    }
  },
  blocks: {
    embed: ({ node }: { node: SerializedBlockNode }) => {
      return (
        <iframe
          width="100%"
          title={node.fields.embedTitle ?? 'Embedded media'}
          allow="autoplay"
          src={node.fields.embedUrl}
          className="embed embed-block"
        ></iframe>
      );
    },
    form: ({ node }: { node: SerializedBlockNode }) => {
      const payloadForm =
        typeof node?.fields?.form !== 'number' ? node.fields.form : undefined;

      return <Form form={payloadForm} />;
    }
  }
});

function RichText({ className, data }: RichTextType) {
  return (
    data && (
      <LexicalRichText
        data={data}
        className={cn(
          'lexical rich-text-container text-foreground',
          styles.richtext,
          className
        )}
        converters={jsxConverters}
      />
    )
  );
}

export default RichText;
