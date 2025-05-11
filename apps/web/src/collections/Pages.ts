import { allBlocks } from '@mono/web/lib/blockList';
import { WEB_URL } from '@mono/web/lib/constants';
import formatSlug from '@mono/web/payload/utils/formatSlug';
import type { CollectionConfig, Field } from 'payload';

import { invalidateCache } from '@mono/web/hooks/invalidateCache';
import { publishBeforeRead } from '../hooks/publishBeforeRead';

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'pageTitle',
    defaultColumns: ['pageTitle', 'slug', '_status', 'createdAt'],
    livePreview: {
      url: ({ data: { slug }, req }) => {
        const protocol = process.env.VERCEL_URL ? 'https' : 'http';
        const baseUrl = `${protocol}://${req.host}`;
        return `${baseUrl}/draft/${slug}`;
      }
    }
  },
  access: {
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) {
        return true;
      }

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
      // or where `_status` does not exist
      return {
        or: [
          {
            _status: {
              equals: 'published'
            }
          },
          {
            _status: {
              exists: false
            }
          }
        ]
      };
    }
  },
  versions: {
    drafts: {
      autosave: true
    }
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page Configuration',
          fields: [
            {
              name: 'pageTitle',
              label: 'Page Title',
              type: 'text',
              localized: true,
              admin: {
                position: 'sidebar'
              },
              required: true
            },
            {
              name: 'slug',
              label: 'Page Slug',
              type: 'text',
              unique: true,
              validate: (value: string) => {
                const regex = /[!@#$%^*[()+=.]/;
                if (regex.test(value)) {
                  return 'Slug cannot contain special characters !@]{${%^*()[+= or .';
                }
                if (value === 'admin') {
                  return 'Slug cannot be "admin"';
                }
                if (value === 'api') {
                  return 'Slug cannot be "api"';
                }
                return true;
              },
              admin: {
                position: 'sidebar',
                description: 'Will be auto-generated to title if left blank.'
              },
              hooks: {
                beforeValidate: [formatSlug('pageTitle')]
              }
            } as Field,
            {
              name: 'theme',
              label: 'Theme',
              type: 'select',
              admin: {
                position: 'sidebar'
              },
              required: false,
              options: themeOptions
            },
            {
              name: 'publishedAt',
              type: 'date',
              label: 'Published At',
              admin: {
                description:
                  'If the current time is before this date, the page will not render',
                date: {
                  pickerAppearance: 'dayAndTime'
                },
                position: 'sidebar'
              },
              defaultValue: () => new Date().toJSON()
            },
            {
              name: 'url',
              type: 'text',
              admin: {
                readOnly: true,
                position: 'sidebar',
                components: {
                  Cell: {
                    path: '@mono/web/components/AdminCellLink#AdminCellLink'
                  }
                }
              },
              hooks: {
                beforeChange: [
                  ({ siblingData }) => {
                    // ensures data is not stored in DB
                    delete siblingData.url;
                  }
                ],
                afterRead: [
                  ({ data }) => {
                    return `/${data?.slug ?? ''}`;
                  }
                ]
              }
            },
            {
              name: 'absoluteUrl',
              type: 'text',
              admin: {
                readOnly: true,
                position: 'sidebar',
                components: {
                  Cell: {
                    path: '@mono/web/components/AdminCellLink#AdminCellLink'
                  }
                }
              },
              hooks: {
                beforeChange: [
                  ({ siblingData }) => {
                    // ensures data is not stored in DB
                    delete siblingData.url;
                  }
                ],
                afterRead: [
                  ({ data }) => {
                    return `${WEB_URL}/${data?.slug ?? ''}`;
                  }
                ]
              }
            }
          ]
        },
        {
          label: 'Page Content',
          fields: [
            {
              name: 'blocks',
              label: 'Blocks',
              type: 'blocks',
              blocks: allBlocks('page')
            }
          ]
        }
      ]
    }
  ],
  hooks: {
    beforeRead: [publishBeforeRead],
    afterChange: [invalidateCache]
  }
};

export default Pages;
