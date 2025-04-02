import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import Form from '@mono/web/components/Form';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger
} from '@mono/web/components/ui/Dialog';
import type { Themes } from '@mono/web/lib/constants';
import { cn } from '@mono/web/lib/utils';
import type {
  DefaultNodeTypes,
  SerializedBlockNode
} from '@payloadcms/richtext-lexical';
import {
  type JSXConvertersFunction,
  RichText as LexicalRichText
} from '@payloadcms/richtext-lexical/react';
import React from 'react';
import Link from './Blocks/Link';
import Video from './Blocks/Video';
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

export type AugmentedSerializedBlockNode = SerializedBlockNode & {
  theme?: Themes;
};

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  eyebrow: ({ node }) => {
    return <span className={cn(styles.eyebrow, 'eyebrow')}>{node?.text}</span>;
  },
  link: LinkConverter,
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
    },
    link: ({ node }: { node: AugmentedSerializedBlockNode }) => {
      return <Link node={node} />;
    },
    modal: ({ node }: { node: AugmentedSerializedBlockNode }) => {
      return (
        <Dialog>
          <DialogTrigger>
            <strong className="cursor-pointer hover:opacity-80 hover:scale-101 mt-6 inline-block transition-all duration-250 ease-in-out">
              <u>{node.fields.modal_text}</u>
            </strong>
          </DialogTrigger>
          <DialogOverlay className="opacity-0 pointer-events-none">
            {/* TODO: Border Radius theme setting? */}
            <DialogContent className={`${node.theme || ''} border-primary`}>
              <DialogTitle className="text-foreground">
                {node.fields.modal_text}
              </DialogTitle>
              <DialogClose className="text-muted-foreground" />
              <RichText data={node.fields.modal_content} />

              <DialogClose className="absolute top-4 right-4 text-primary cursor-pointer hover:scale-110">
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </DialogOverlay>
        </Dialog>
      );
    },
    video: ({ node }: { node: AugmentedSerializedBlockNode }) => {
      return <Video node={node} />;
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
