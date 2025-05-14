import type { GroupField } from 'payload';

import Link from './Link';

function CTA({
  name,
  interfaceName,
  defaultVariant,
  localized,
  fields = [],
  condition
}: Partial<GroupField> & {
  defaultVariant?: string;
  condition?: () => boolean;
} = {}): GroupField {
  return {
    name: 'cta',
    type: 'group',
    interfaceName: interfaceName || 'CTAType',
    fields: [
      Link({ localized }),
      {
        label: 'CTA Settings',
        type: 'collapsible',
        admin: {
          initCollapsed: false
        },
        fields: [
          {
            name: 'variant',
            label: 'Variant',
            type: 'select',
            defaultValue: defaultVariant || 'solid',
            dbName: `${name?.toLowerCase()}_cta_v`,
            options: [
              {
                label: 'Outline',
                value: 'outline'
              },
              {
                label: 'Solid',
                value: 'solid'
              },
              {
                label: 'Link',
                value: 'link'
              }
            ],
            admin: {
              description:
                'Variant Style of button - reference Button component in storybook',
              condition
            }
          },
          {
            name: 'color',
            label: 'Color Variant',
            type: 'select',
            required: false,
            dbName: `${name?.toLowerCase()}_cta_tv`,
            options: [
              {
                label: 'Light',
                value: 'lightTheme'
              },
              {
                label: 'Dark',
                value: 'darkTheme'
              },
              {
                label: 'Contrast',
                value: 'contrast'
              }
            ],
            admin: {
              description:
                'Theme styles of button - defaults to Block Theme if not set',
              condition
            }
          },
          ...fields
        ]
      }
    ]
  };
}

export default CTA;
