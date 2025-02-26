import type { Block } from 'payload';

export const Form: Block = {
  slug: 'form',
  fields: [
    {
      type: 'relationship',
      name: 'form',
      relationTo: 'forms',
      required: true
    }
  ]
};
