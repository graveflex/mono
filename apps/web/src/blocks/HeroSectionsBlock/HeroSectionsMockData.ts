import { faker } from '@faker-js/faker';
import type { Form } from '@mono/types/payload-types';
import type { RichTextType } from '@mono/web/components/RichText';
import type { HeroSectionsBlockType } from '.';

const imgUrl = faker.image.url();

const heroSectionsMockData: RichTextType = {
  data: {
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
              text: 'Hero Block',
              type: 'eyebrow',
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
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: "Headline that solves user's main problem",
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
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
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

export const heroSectionsWithFormMockData: RichTextType = {
  data: {
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
              text: 'Hero Block',
              type: 'eyebrow',
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
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: "Headline that solves user's main problem",
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
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
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
          type: 'block',
          fields: {
            id: '67b8a85c617c2883988eade4',
            form: {
              id: 1,
              title: 'Email Signup',
              fields: [
                {
                  id: '67b8a833bb2c2c0af9d99976',
                  name: 'email',
                  width: null,
                  required: true,
                  blockName: 'Enter email',
                  blockType: 'email',
                  label: 'Email'
                }
              ],
              submitButtonLabel: 'Sign up',
              confirmationType: 'message',
              confirmationMessage: {
                root: {
                  type: 'root',
                  format: '',
                  indent: 0,
                  version: 1,
                  children: [
                    {
                      tag: 'h3',
                      type: 'heading',
                      format: '',
                      indent: 0,
                      version: 1,
                      children: [
                        {
                          mode: 'normal',
                          text: 'Thanks!',
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
              redirect: {
                url: null
              },
              emails: [],
              updatedAt: '2025-02-21T16:22:30.383Z',
              createdAt: '2025-02-21T16:22:30.383Z'
            },
            blockName: '',
            blockType: 'form'
          },
          format: '',
          version: 2
        }
      ],
      direction: 'ltr'
    }
  }
};

export const imgMockData: HeroSectionsBlockType['media'] = {
  relationTo: 'images',
  value: {
    id: 1,
    alt: 'Faker Image',
    imageProps: {
      priority: false,
      quality: 75
    },
    updatedAt: '2025-02-11T19:37:08.365Z',
    createdAt: '2025-02-11T19:37:08.365Z',
    url: imgUrl,
    thumbnailURL: imgUrl,
    filename: 'faker-image.png',
    mimeType: 'image/png',
    filesize: 524540,
    width: 800,
    height: 535,
    focalX: 50,
    focalY: 50,
    sizes: {
      blur: {
        url: faker.image.url(),
        width: 10,
        height: 7,
        mimeType: 'image/png',
        filesize: 306,
        filename: 'faker-image.png'
      },
      thumbnail: {
        url: imgUrl,
        width: 300,
        height: 201,
        mimeType: 'image/png',
        filesize: 173014,
        filename: 'faker-image.png'
      },
      mobile: {
        url: imgUrl,
        width: 768,
        height: 514,
        mimeType: 'image/png',
        filesize: 1128827,
        filename: 'faker-image.png'
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
};

export const videoMockData: HeroSectionsBlockType['media'] = {
  relationTo: 'videos',
  value: {
    id: 1,
    title: 'Penguins',
    description: null,
    publishedDate: null,
    updatedAt: '2025-02-21T16:21:11.401Z',
    createdAt: '2025-02-21T16:21:11.401Z',
    url: 'https://www.geoex.com/app/uploads/2020/10/antarctica-emperor-penguin-colony.mp4',
    thumbnailURL: null,
    filename: 'antarctica-emperor-penguin-colony.mp4',
    mimeType: 'video/mp4',
    filesize: 5000000,
    width: null,
    height: null,
    focalX: null,
    focalY: null
  }
};

export default heroSectionsMockData;
