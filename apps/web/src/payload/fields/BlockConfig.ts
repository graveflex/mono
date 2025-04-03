import type { CollapsibleField, Field, Option } from 'payload';

const themeOptions = [
  { label: 'Inherit', value: '_' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

const paddingLabels = [
  'None',
  'X-Small',
  'Small',
  'Medium',
  'Large',
  'X-Large',
  'XX-Large'
] as const;
const paddingValues = [0, 2, 4, 6, 8, 10, 16] as const;

const genPaddingOptions = (prefix: 'pt' | 'pb') =>
  paddingLabels.map((label, idx) => {
    const value = paddingValues[idx];

    return {
      label,
      value: `${prefix}-${value}` as const
    };
  });

const paddingTopOptions = genPaddingOptions('pt');
const paddingBottomOptions = genPaddingOptions('pb');

const contentWidthValues = [
  { label: 'Full-Bleed', value: 'full' },
  { label: 'XX-Large', value: 'xxl' },
  { label: 'X-Large', value: 'xl' },
  { label: 'Large', value: 'lg' },
  { label: 'Medium', value: 'md' },
  { label: 'Small', value: 'sm' },
  { label: 'X-Small', value: 'xs' }
];

const paddingOptions: Array<Field> = [
  {
    name: 'paddingTop',
    dbName: 't',
    label: 'Padding Top',
    required: false,
    type: 'select',
    options: paddingTopOptions as Option[]
  },
  {
    name: 'paddingBottom',
    dbName: 'b',
    label: 'Padding Bottom',
    required: false,
    type: 'select',
    options: paddingBottomOptions as Option[]
  }
];

function BlockConfig({
  label,
  fields = [],
  defaultWidth,
  defaultPadding
}: Partial<CollapsibleField> & {
  defaultPadding?: {
    paddingTop: string;
    paddingBottom: string;
  };
  defaultWidth?: string;
} = {}): CollapsibleField {
  return {
    label: label || 'Theme, Padding & Content Width Settings',
    type: 'collapsible',
    admin: {
      initCollapsed: true
    },
    fields: [
      {
        label: label || 'Theme, Padding & Content Width Settings',
        type: 'group',
        name: 'wrapper',
        fields: [
          {
            name: 'theme',
            label: 'Theme',
            type: 'select',
            required: false,
            options: themeOptions
          },
          {
            name: 'contentWidth',
            dbName: 'cw',
            label: 'Content Width',
            type: 'select',
            required: false,
            options: contentWidthValues,
            defaultValue: defaultWidth || 'xl'
          },
          {
            name: 'fullWidthThemeBg',
            label: 'Use Theme Background for Full Screen Width?',
            type: 'checkbox',
            required: false,
            admin: {
              description:
                'Set this to true if you want the block theme background to extend all the way to the edge of the browsers screen.'
            }
          },
          {
            name: 'paddingXs',
            label: 'Padding',
            type: 'group',
            fields: [...paddingOptions],
            defaultValue: defaultPadding || {
              paddingTop: 'pt-4',
              paddingBottom: 'pb-4'
            }
          },

          {
            label: 'Advanced Padding',
            type: 'collapsible',
            admin: {
              initCollapsed: true
            },
            fields: [
              {
                name: 'paddingMd',
                label: 'Tablet and above',
                type: 'group',
                fields: [...paddingOptions]
              },
              {
                name: 'paddingLg',
                label: 'Desktop and above',
                type: 'group',
                fields: [...paddingOptions]
              },
              {
                name: 'paddingXl',
                label: 'XL Desktop and above',
                type: 'group',
                fields: [...paddingOptions]
              }
            ]
          },
          ...fields
        ]
      }
    ]
  };
}

export default BlockConfig;
