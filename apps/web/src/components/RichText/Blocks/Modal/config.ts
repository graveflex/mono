import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const Modal: Block = {
  slug: 'modal',
  fields: [
    {
      type: 'text',
      label: 'Modal Text',
      name: 'modal_text',
      required: true
    },
    {
      type: 'richText',
      label: 'Modal Content',
      name: 'modal_content',
      required: false,
      editor: lexicalEditor({})
    }
  ]
};
