import { globalInvalidateCache } from '@mono/web/hooks/globalInvalidateCache';
import NestedLinkArray from '@mono/web/payload/fields/NestedLinks';
import type { GlobalConfig } from 'payload';

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

        {
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
        },
        NestedLinkArray({
          name: 'links',
          label: 'Header Links',
          dbName: 'navHeaderLinks'
        })
      ]
    },

    {
      name: 'footer',
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
        }
      ]
    }
  ],
  hooks: {
    afterChange: [globalInvalidateCache]
  }
};

export default Nav;
