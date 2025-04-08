import { Embed } from '@mono/web/components/RichText/Blocks/Embed/config';
import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { FeatureProviderServer } from '@payloadcms/richtext-lexical';
import {
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  UnderlineFeature,
  UnorderedListFeature,
  UploadFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

const variantsWithBttmContent = ['1'];

const FaqSectionsBlock = (prefix: string): Block => ({
  slug: 'faqSectionsBlock',
  interfaceName: 'FaqSectionsBlockT',
  dbName: `${prefix}FaqSectionsBlock`,
  fields: [
    BlockConfig(),
    MakeVariations(4, prefix, 'FaqSectionsBlock'),
    {
      name: 'content',
      label: 'content',
      type: 'richText',
      localized: true,
      required: false
    },
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          localized: true,
          required: true,
          admin: {
            description:
              'The text that appears on the clickable (closed or opened) accordion item.'
          }
        },
        {
          name: 'description',
          label: 'Description',
          type: 'richText',
          localized: true,
          required: false,
          editor: lexicalEditor({
            features: () =>
              [
                BoldFeature(),
                InlineCodeFeature(),
                ItalicFeature(),
                StrikethroughFeature(),
                UnderlineFeature(),
                ParagraphFeature(),
                HorizontalRuleFeature(),
                UnorderedListFeature(),
                OrderedListFeature(),
                LinkFeature({
                  fields: [
                    {
                      name: 'type',
                      label: 'Type of Link',
                      type: 'select',
                      defaultValue: 'internal',
                      options: [
                        {
                          label: 'Internal',
                          value: 'internal'
                        },
                        {
                          label: 'External',
                          value: 'external'
                        },
                        {
                          label: 'Email',
                          value: 'email'
                        },
                        {
                          label: 'Phone',
                          value: 'phone'
                        },
                        {
                          label: 'File',
                          value: 'file'
                        }
                      ]
                    },
                    {
                      name: 'internalUrl',
                      label: 'Internal URL',
                      type: 'relationship',
                      relationTo: 'pages',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData.type === 'internal'
                      }
                    },
                    {
                      name: 'externalUrl',
                      label: 'External URL',
                      type: 'text',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData.type === 'external'
                      }
                    },
                    {
                      name: 'emailUrl',
                      label: 'Email Address',
                      type: 'text',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData.type === 'email'
                      }
                    },
                    {
                      name: 'phoneUrl',
                      label: 'Phone Number',
                      type: 'text',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData.type === 'phone'
                      }
                    },
                    {
                      name: 'file',
                      label: 'File',
                      type: 'upload',
                      relationTo: 'files',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData.type === 'file'
                      }
                    }
                  ]
                }),
                UploadFeature(),
                InlineToolbarFeature(),
                BlockquoteFeature(),
                EXPERIMENTAL_TableFeature(),
                FixedToolbarFeature(),
                BlocksFeature({
                  blocks: [Embed],
                  inlineBlocks: []
                })
              ] as FeatureProviderServer<unknown, unknown>[]
          }),
          admin: {
            description:
              'The content that appears when an accordion item is opened.'
          }
        }
      ]
    },
    {
      name: 'bottomContent',
      label: 'Bottom Content',
      type: 'richText',
      localized: true,
      required: false,
      admin: {
        description: 'Content that appears below the Accordion items.',
        condition: (_, siblingData) => {
          if (variantsWithBttmContent.includes(siblingData.variant)) {
            return true;
          }
          return false;
        }
      }
    }
  ]
});

export default FaqSectionsBlock;
