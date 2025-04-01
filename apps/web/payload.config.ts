import Admins from '@mono/web/collections/Admins';
import Authors from '@mono/web/collections/Authors';
import Files from '@mono/web/collections/Files';
import Images from '@mono/web/collections/Images';
import Pages from '@mono/web/collections/Pages';
import Posts from '@mono/web/collections/Posts';
import Tags from '@mono/web/collections/Tags/Tags.config';
import UserEmailProviders from '@mono/web/collections/UserEmailProviders';
import Users from '@mono/web/collections/Users';
import Videos from '@mono/web/collections/Videos';
import BlogIndex from '@mono/web/globals/BlogIndex/BlogIndex.config';
import Homepage from '@mono/web/globals/Home/Homepage.config';
import Nav from '@mono/web/globals/Layout/Layout.config';
// import nodeMailer from 'nodemailer';
import { CACHE_TAGS, DEFAULT_LOCALE, LOCALES } from '@mono/web/lib/constants';
import { translator } from '@payload-enchants/translator';
import { googleResolver } from '@payload-enchants/translator/resolvers/google';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder';
import { importExportPlugin } from '@payloadcms/plugin-import-export';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { seoPlugin } from '@payloadcms/plugin-seo';
import type { FeatureProviderServer } from '@payloadcms/richtext-lexical';
import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
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
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { revalidatePath, revalidateTag } from 'next/cache';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import { buildConfig } from 'payload';
import { authjsPlugin } from 'payload-authjs';
import sharp from 'sharp';
import { authConfig } from './src/auth.config';
import { Embed } from './src/components/RichText/Blocks/Embed/config';
import { Form } from './src/components/RichText/Blocks/Form/config';
import { Link } from './src/components/RichText/Blocks/Link/config';
import { EyebrowFeature } from './src/components/RichText/Features/eyebrow/eyebrow.server';

const DATABASE_URL = process.env.DATABASE_URL as string;

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: DATABASE_URL
    },
    push: false
  }),
  editor: lexicalEditor({
    features: () =>
      [
        AlignFeature(),
        BoldFeature(),
        InlineCodeFeature(),
        ItalicFeature(),
        StrikethroughFeature(),
        UnderlineFeature(),
        ParagraphFeature(),
        HeadingFeature({
          enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4']
        }),
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
                condition: (_, siblingData) => siblingData.type === 'internal'
              }
            },
            {
              name: 'externalUrl',
              label: 'External URL',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'external'
              }
            },
            {
              name: 'emailUrl',
              label: 'Email Address',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'email'
              }
            },
            {
              name: 'phoneUrl',
              label: 'Phone Number',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'phone'
              }
            },
            {
              name: 'file',
              label: 'File',
              type: 'upload',
              relationTo: 'files',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'file'
              }
            },
            {
              name: 'appearance',
              label: 'Appearance',
              type: 'select',
              defaultValue: 'default',
              options: [
                {
                  label: 'Default',
                  value: 'default'
                },
                {
                  label: 'Button',
                  value: 'button'
                }
              ]
            },
            {
              name: 'buttonStyle',
              label: 'Button Style',
              type: 'select',
              defaultValue: 'default',
              options: [
                {
                  label: 'Default',
                  value: 'default'
                },
                {
                  label: 'Secondary',
                  value: 'secondary'
                },
                {
                  label: 'Outline',
                  value: 'outline'
                }
              ],
              admin: {
                condition: (_, siblingData) =>
                  siblingData.appearance === 'button'
              }
            }
          ]
        }),
        UploadFeature(),
        InlineToolbarFeature(),
        BlockquoteFeature(),
        EXPERIMENTAL_TableFeature(),
        FixedToolbarFeature(),
        EyebrowFeature(),
        BlocksFeature({
          blocks: [Embed, Form, Link],
          inlineBlocks: []
        })
      ] as FeatureProviderServer<unknown, unknown>[]
  }),
  collections: [
    Pages,
    Posts,
    Authors,
    Tags,
    Files,
    Images,
    Videos,
    Users,
    UserEmailProviders,
    Admins
  ],
  i18n: {
    fallbackLanguage: 'en'
  },
  localization: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    fallback: true
  },
  globals: [Nav, Homepage, BlogIndex],
  routes: {
    api: '/api'
  },
  plugins: [
    importExportPlugin({
      collections: [
        'users',
        'pages',
        'admins',
        'authors',
        'files',
        'images',
        'posts',
        'userEmailProviders',
        'videos'
      ],
      disableJobsQueue: true,
      overrideExportCollection: (collection) => {
        // TODO: In looking at the collection.upload types,
        // looks like we can tweak the export uploads. We should
        // be able to store those somewhere outside of the local
        // exports folder.
        // collection.upload
        return collection;
      }
    }),
    authjsPlugin({
      authjsConfig: authConfig
    }),
    seoPlugin({
      collections: ['pages', 'posts'],
      fields: ({ defaultFields }) => [
        ...defaultFields,
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text'
        }
      ],
      tabbedUI: true,
      uploadsCollection: 'images',
      generateTitle: ({ doc }) => `Monorepo | ${doc.pageTitle || doc.title}`,
      generateDescription: () => "Monorepo's description text"
    }),
    redirectsPlugin({
      collections: ['pages', 'posts']
    }),
    vercelBlobStorage({
      enabled: true,
      collections: {
        [Images.slug]: {
          disablePayloadAccessControl: true
        },
        [Files.slug]: true,
        [Videos.slug]: {
          disablePayloadAccessControl: true
        },
        exports: true
      },
      token: process.env.BLOB_READ_WRITE_TOKEN as string
    }),
    translator({
      // collections with the enabled translator in the admin UI
      collections: [
        'pages',
        'images',
        'files',
        'videos',
        'posts',
        'tags',
        'authors'
      ],
      // globals with the enabled translator in the admin UI
      globals: ['nav', 'homepage'],
      // add resolvers that you want to include, examples on how to write your own in ./plugin/src/resolvers
      resolvers: [
        googleResolver({
          apiKey: process.env.GOOGLE_TRANSLATE_API_KEY as string
        })
      ]
    }),
    formBuilderPlugin({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        state: false,
        country: false,
        checkbox: true,
        number: true,
        message: false,
        payment: false
      }
    })
  ],
  upload: {
    limits: {
      fileSize: 5000000 // 5MB, written in bytes
    }
  },
  admin: {
    user: Admins.slug,
    autoLogin: {
      email: 'admin@graveflex.com',
      password: 'test',
      prefillOnly: true
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 820,
          height: 1180
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1400,
          height: 900
        },
        {
          label: 'High Density',
          name: 'density',
          width: 2560,
          height: 1600
        }
      ],
      collections: ['pages']
    },
    importMap: {
      baseDir: './src'
    },
    components: {
      afterNavLinks: [
        {
          path: '@mono/web/components/CustomPayload/AfterNav/index.tsx',
          exportName: 'AfterNav'
        }
      ],
      graphics: {
        Icon: '@mono/web/components/CustomPayload/PayloadLogo/index.tsx#Icon',
        Logo: '@mono/web/components/CustomPayload/PayloadLogo/index.tsx#Logo'
      }
    }
  },
  secret: process.env.PAYLOAD_SECRET || '',
  email: nodemailerAdapter({
    defaultFromAddress:
      process.env.SENDGRID_FROM_EMAIL || 'dispatch@graveflex.com',
    defaultFromName: process.env.SENDGRID_FROM_NAME || 'Payload',
    transportOptions: nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY || ''
    })
  }),
  typescript: {
    outputFile: '../../packages/types/payload-types.ts'
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'admins',
      limit: 1
    });

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'admins',
        data: {
          email: 'admin@graveflex.com',
          password: 'test'
        }
      });
    }
  },
  sharp,
  jobs: {
    tasks: [
      {
        // Configure this task to automatically retry
        // up to two times
        retries: 2,
        slug: 'NukeCache',
        // These are the arguments that your Task will accept
        inputSchema: [
          {
            name: 'title',
            type: 'text',
            required: false
          }
        ],

        // handler: async ({input, job, req}) => {
        handler: async ({ input }) => {
          console.dir('NukeCache fired!');
          console.dir('input:', input);

          revalidatePath('/', 'layout');

          for (const tag of CACHE_TAGS) {
            revalidateTag(tag);
          }

          return { output: { true: false } };
        }
      }
    ]
  }
});
