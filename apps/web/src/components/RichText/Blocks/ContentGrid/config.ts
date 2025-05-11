import type { FeatureProviderServer } from '@payloadcms/richtext-lexical';
import {
  BoldFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  UnderlineFeature,
  UnorderedListFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const ContentGrid: Block = {
  slug: 'contentGrid',
  fields: [
    {
      type: 'radio',
      name: 'numOfColsOnDesktop',
      label: 'Number of Columns on Desktop',
      required: true,
      defaultValue: '2',
      options: [
        {
          label: '1',
          value: '1'
        },
        {
          label: '2',
          value: '2'
        },
        {
          label: '3',
          value: '3'
        },
        {
          label: '4',
          value: '4'
        }
      ],
      admin: {
        description:
          'The amount of columns for the content sections on desktop. The default is 2 columns.'
      }
    },
    {
      type: 'radio',
      name: 'contentHeaderType',
      label: 'Content Header Type',
      required: true,
      defaultValue: 'icon',
      options: [
        {
          label: 'Icon',
          value: 'icon'
        },
        {
          label: 'Title',
          value: 'title'
        }
      ],
      admin: {
        description:
          'For the top of each content section, select if you want to use an icon or title text.'
      }
    },
    {
      type: 'radio',
      name: 'contentHeaderPosition',
      label: 'Content Header Position',
      defaultValue: 'top',
      required: true,
      options: [
        {
          label: 'Top',
          value: 'top'
        },
        {
          label: 'Left',
          value: 'left'
        }
      ]
    },
    {
      type: 'array',
      name: 'contentGridItems',
      label: 'Content Grid Items',
      fields: [
        {
          type: 'text',
          name: 'title',
          localized: true,
          admin: {
            description: 'Large text at top of content grid item.',
            condition: (_, _siblingData, pageData) => {
              if (pageData?.blockData?.contentHeaderType === 'title') {
                return true;
              }
              return false;
            }
          }
        },
        {
          type: 'text',
          name: 'heading',
          localized: true,
          required: true,
          admin: {
            description: 'The heading for each content grid item.'
          }
        },
        {
          name: 'innerContent',
          label: 'Inner Content',
          type: 'richText',
          required: false,
          editor: lexicalEditor({
            features: () =>
              [
                BoldFeature(),
                ItalicFeature(),
                StrikethroughFeature(),
                UnderlineFeature(),
                ParagraphFeature(),
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
                InlineToolbarFeature(),
                FixedToolbarFeature()
              ] as FeatureProviderServer<unknown, unknown>[]
          })
        }
      ]
    }
  ]
};
