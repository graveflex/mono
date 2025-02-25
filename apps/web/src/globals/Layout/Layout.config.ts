import { globalInvalidateCache } from '@mono/web/hooks/globalInvalidateCache';
import CTA from '@mono/web/payload/fields/CTA';
import IconSelect from '@mono/web/payload/fields/IconSelect';
import Link from '@mono/web/payload/fields/Link';
import NestedLinkArray from '@mono/web/payload/fields/NestedLinks';
import type { ArrayField, GlobalConfig, GroupField } from 'payload';

const banner: GroupField = {
  name: 'banner',
  label: 'Banner',
  type: 'group',
  interfaceName: 'BannerContent',
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText'
    },
    {
      name: 'background',
      label: 'Background Color',
      type: 'select',
      options: ['white', 'black', 'gray']
    }
  ]
};

const nestedLinks = NestedLinkArray({
  dbName: 'navHeaderLinks'
});

const collapsibleMenu: GroupField = {
  name: 'collapsibleMenu',
  label: 'Collapsible Menu',
  type: 'group',
  interfaceName: 'CollapsibleMenu',
  fields: [
    {
      name: 'sections',
      label: 'Sections',
      type: 'array',
      localized: true,
      admin: {
        components: {
          RowLabel: '@mono/web/components/AdminRowLabel/index.tsx#default'
        }
      },
      fields: [
        {
          name: 'label',
          label: 'Dropdown Label',
          admin: {
            description: 'Label for menu item'
          },
          type: 'text',
          required: true
        },
        {
          name: 'links',
          label: 'Page Links',
          admin: {
            description: 'The pages that will be linked in this section',
            components: {
              RowLabel: '@mono/web/components/AdminRowLabel/index.tsx#default'
            }
          },
          type: 'array',
          fields: [Link()]
        },
        nestedLinks
      ]
    }
  ]
};

const flatMenu: ArrayField = {
  name: 'flatMenu',
  label: 'Flat Menu',
  type: 'array',
  interfaceName: 'FlatMenu',
  admin: {
    description:
      'The pages that will be linked in this section will not have a dropdown',
    components: {
      RowLabel: '@mono/web/components/AdminRowLabel/index.tsx#default'
    }
  },
  fields: [Link()]
};

const iconItems: ArrayField = {
  name: 'iconItems',
  label: 'Icon Items',
  type: 'array',
  interfaceName: 'IconNavItems',
  admin: {
    description: 'Nav Items that are only displayed with an icon',
    components: {
      RowLabel: '@mono/web/components/AdminRowLabel/index.tsx#default'
    }
  },
  fields: [
    {
      name: 'href',
      label: 'Link',
      type: 'text'
    },
    {
      name: 'newTab',
      label: 'Open in new tab',
      type: 'checkbox',
      required: false
    },
    IconSelect({ name: 'iconNavItem' })
  ]
};

const footerItems: GroupField = {
  name: 'footerItems',
  label: 'Footer Items',
  interfaceName: 'FooterItems',
  type: 'group',
  fields: [
    {
      name: 'footerLogo',
      label: 'Footer Logo',
      type: 'upload',
      relationTo: 'images',
      admin: {
        description: 'Logo for footer. Prefer `.svg`'
      }
    },
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'richText'
    },
    {
      name: 'legalDisclaimer',
      label: 'Legal Disclaimer',
      type: 'richText'
    },
    {
      ...flatMenu,
      name: 'footerMenu',
      label: 'Footer Menu Links'
    }
  ]
};

const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Header and Footer',
  admin: {
    group: 'Navigation'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'header',
      label: 'Header',
      type: 'group',
      fields: [
        {
          name: 'logo',
          label: 'Logo',
          type: 'upload',
          relationTo: 'images',
          admin: {
            description: 'Logo for header. Prefer `.svg`'
          }
        },
        banner,
        collapsibleMenu,
        flatMenu,
        iconItems,
        {
          name: 'hasCta',
          label: 'Has CTA Button',
          type: 'checkbox'
        },
        {
          name: 'ctaButton',
          label: 'CTA Button',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.hasCta,
            description: 'Call to Action Button'
          },
          fields: [CTA()]
        }
      ]
    },
    {
      name: 'footer',
      label: 'Footer',
      type: 'group',
      fields: [footerItems]
    }
  ],
  hooks: {
    afterChange: [globalInvalidateCache]
  }
};

export default Nav;
