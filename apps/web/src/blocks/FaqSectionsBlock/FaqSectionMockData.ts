import type { RichTextType } from '@mono/web/components/RichText';
import type { FaqSectionsBlockType } from './index';

export const FaqBlockContent: RichTextType = {
  data: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'FAQ Section',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          tag: 'h2',
          type: 'heading',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Frequently asked questions',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr'
        },
        {
          type: 'paragraph',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? Contact us. ",
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        }
      ],
      direction: 'ltr'
    }
  }
};
export const FaqBlockContentLeftAligned: RichTextType = {
  data: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: 'left',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'FAQ Section',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          tag: 'h2',
          type: 'heading',
          format: 'left',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Frequently asked questions',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr'
        },
        {
          type: 'paragraph',
          format: 'left',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? Contact us. ",
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        }
      ],
      direction: 'ltr'
    }
  }
};

const FaqItems: FaqSectionsBlockType['items'] = [
  {
    id: '67eeed748a32c257539f02b9',
    title: 'What is shadcn/ui?',
    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0
          }
        ],
        direction: 'ltr'
      }
    }
  },
  {
    id: '67eeed8f8a32c257539f02bb',
    title: 'What is shadcn/ui kit for Figma?',
    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0
          }
        ],
        direction: 'ltr'
      }
    }
  },
  {
    id: '67eeed958a32c257539f02bd',
    title: "I'm not familiar with shadcn/ui. Can I still use this kit?",
    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0
          }
        ],
        direction: 'ltr'
      }
    }
  },
  {
    id: '67eeed9e8a32c257539f02bf',
    title: 'Can I create multi-brand design systems with this UI kit?',
    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0
          }
        ],
        direction: 'ltr'
      }
    }
  },
  {
    id: '67eeeda78a32c257539f02c1',
    title: 'How will this kit save me time?',
    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0
          }
        ],
        direction: 'ltr'
      }
    }
  },
  {
    id: '67eeedb08a32c257539f02c3',
    title: 'How does this improve my collaboration with developers?',
    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr',
            textStyle: '',
            textFormat: 0
          }
        ],
        direction: 'ltr'
      }
    }
  }
];

export const bottomContent: RichTextType = {
  data: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          tag: 'h2',
          type: 'heading',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Still have questions?',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr'
        },
        {
          type: 'paragraph',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Have questions or need assistance? Our team is here to help!',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          type: 'paragraph',
          format: 'center',
          indent: 0,
          version: 1,
          children: [
            {
              id: '67f5485e0908776a180a2419',
              type: 'link',
              fields: {
                file: {
                  id: 2,
                  title: 'Asdf',
                  description: null,
                  updatedAt: '2025-04-08T19:24:47.920Z',
                  createdAt: '2025-04-08T19:24:47.614Z',
                  url: '/api/files/file/dummy_pdf_file-1.pdf',
                  thumbnailURL: null,
                  filename: 'dummy_pdf_file-1.pdf',
                  mimeType: 'application/pdf',
                  filesize: 13264,
                  width: null,
                  height: null,
                  focalX: null,
                  focalY: null
                },
                type: 'internal',
                emailUrl: 'brett@graveflex.com',
                phoneUrl: '8106245524',
                appearance: 'button',
                buttonStyle: 'default',
                externalUrl: 'https://www.google.com/',
                internalUrl: {
                  id: 1,
                  blocks: [
                    {
                      id: '67f578601cb8bd07ff3053b9',
                      variant: '1',
                      mediaPosition: 'right',
                      blockName: null,
                      blockType: 'heroSectionsBlock',
                      wrapper: {
                        theme: null,
                        contentWidth: 'xl',
                        paddingXs: {
                          paddingTop: 'pt-4',
                          paddingBottom: 'pb-4'
                        },
                        paddingMd: {
                          paddingTop: null,
                          paddingBottom: null
                        },
                        paddingLg: {
                          paddingTop: null,
                          paddingBottom: null
                        },
                        paddingXl: {
                          paddingTop: null,
                          paddingBottom: null
                        }
                      },
                      content: {
                        root: {
                          type: 'root',
                          format: '',
                          indent: 0,
                          version: 1,
                          children: [
                            {
                              tag: 'h2',
                              type: 'heading',
                              format: '',
                              indent: 0,
                              version: 1,
                              children: [
                                {
                                  mode: 'normal',
                                  text: 'Brett Test page',
                                  type: 'text',
                                  style: '',
                                  detail: 0,
                                  format: 0,
                                  version: 1
                                }
                              ],
                              direction: 'ltr'
                            }
                          ],
                          direction: 'ltr'
                        }
                      },
                      media: {
                        relationTo: 'images',
                        value: {
                          id: 1,
                          imageProps: {
                            priority: false,
                            quality: 75
                          },
                          updatedAt: '2025-04-08T19:29:44.582Z',
                          createdAt: '2025-04-08T19:29:43.611Z',
                          url: 'https://xcimnkefyv2zqinf.public.blob.vercel-storage.com/Mexico-Chiapas-IMG_8266-800x535-1.png',
                          thumbnailURL:
                            '/api/images/file/Mexico-Chiapas-IMG_8266-800x535-1-300x201.png',
                          filename: 'Mexico-Chiapas-IMG_8266-800x535-1.png',
                          mimeType: 'image/png',
                          filesize: 321665,
                          width: 800,
                          height: 535,
                          focalX: 50,
                          focalY: 50,
                          sizes: {
                            blur: {
                              url: 'https://xcimnkefyv2zqinf.public.blob.vercel-storage.com/Mexico-Chiapas-IMG_8266-800x535-1-10x7.png',
                              width: 10,
                              height: 7,
                              mimeType: 'image/png',
                              filesize: 306,
                              filename:
                                'Mexico-Chiapas-IMG_8266-800x535-1-10x7.png'
                            },
                            thumbnail: {
                              url: 'https://xcimnkefyv2zqinf.public.blob.vercel-storage.com/Mexico-Chiapas-IMG_8266-800x535-1-300x201.png',
                              width: 300,
                              height: 201,
                              mimeType: 'image/png',
                              filesize: 167051,
                              filename:
                                'Mexico-Chiapas-IMG_8266-800x535-1-300x201.png'
                            },
                            mobile: {
                              url: 'https://xcimnkefyv2zqinf.public.blob.vercel-storage.com/Mexico-Chiapas-IMG_8266-800x535-1-768x514.png',
                              width: 768,
                              height: 514,
                              mimeType: 'image/png',
                              filesize: 1119883,
                              filename:
                                'Mexico-Chiapas-IMG_8266-800x535-1-768x514.png'
                            },
                            tablet: {
                              url: null,
                              width: null,
                              height: null,
                              mimeType: null,
                              filesize: null,
                              filename: null
                            },
                            desktop: {
                              url: null,
                              width: null,
                              height: null,
                              mimeType: null,
                              filesize: null,
                              filename: null
                            },
                            ultrawide: {
                              url: null,
                              width: null,
                              height: null,
                              mimeType: null,
                              filesize: null,
                              filename: null
                            }
                          }
                        }
                      }
                    }
                  ],
                  meta: {
                    title: null,
                    description: null,
                    image: null,
                    keywords: null
                  },
                  pageTitle: 'Brett Test',
                  slug: 'brett-test',
                  theme: null,
                  publishedAt: '2025-04-08T19:26:14.092Z',
                  updatedAt: '2025-04-08T19:29:49.239Z',
                  createdAt: '2025-04-08T19:26:14.092Z',
                  _status: 'published'
                }
              },
              format: '',
              indent: 0,
              version: 3,
              children: [
                {
                  mode: 'normal',
                  text: 'Contact us',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1
                }
              ],
              direction: 'ltr'
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        }
      ],
      direction: 'ltr'
    }
  }
};

export default FaqItems;
