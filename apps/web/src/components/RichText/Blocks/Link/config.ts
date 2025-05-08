import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const Link: Block = {
  slug: 'link',
  fields: [
    {
      type: 'richText',
      name: 'content',
      required: false,
      editor: lexicalEditor({})
    },
    {
      name: 'link',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false
        },
        {
          name: 'link',
          type: 'text',
          required: false
        }
      ]
    }
  ]
};
