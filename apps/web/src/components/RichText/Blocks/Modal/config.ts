import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const Modal: Block = {
  slug: 'modal',
  fields: [
    {
      type: 'text',
      label: 'Modal Text',
      name: 'modalText',
      required: true
    },
    {
      type: 'richText',
      label: 'Modal Content',
      name: 'modalContent',
      required: false,
      editor: lexicalEditor({})
    }
  ]
};
