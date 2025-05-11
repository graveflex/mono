'use client';

import type { AugmentedSerializedBlockNode } from '@mono/web/components/RichText';

import RichText from '@mono/web/components/RichText';

interface LinkProps {
  node: AugmentedSerializedBlockNode;
}

export default function Link({ node }: LinkProps) {
  const { fields } = node;
  const { content, link } = fields;

  return (
    <div className="mt-10 relative rounded-lg overflow-hidden border border-border bg-background text-foreground p-6">
      {content && <RichText data={content} />}
      <a
        href={link.link}
        target="_blank"
        rel="noreferrer"
        className="w-full bg-primary inline-block text-center rounded-lg font-bold text-primary-foreground relative px-6 py-3 mt-10 hover:opacity-75 transition-all duration-250 ease-in-out cursor-pointer"
      >
        {link?.title && (link.title || 'Link')}
      </a>
    </div>
  );
}
