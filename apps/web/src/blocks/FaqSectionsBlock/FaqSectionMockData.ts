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

export default FaqItems;
