import type { Meta, StoryObj } from '@storybook/react';

import type { NavigationMenuProps } from '.';
import NavigationMenu from '.';

const meta: Meta<NavigationMenuProps> = {
  title: 'ui/NestedNavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<NavigationMenuProps>;

export const Defaults: Story = {
  args: {
    link: {
      label: 'Shallow Nested',
      links: [
        {
          label: 'Link one',
          href: '/link-one'
        },
        {
          label: 'Link two',
          href: '/link-two'
        }
      ]
    }
  }
};

export const DeeplyNested: Story = {
  args: {
    link: {
      label: 'Deep Nested',
      links: [
        {
          label: 'My Account',
          href: '/account',
          links: [
            {
              label: 'Profile',
              href: '/profile'
            },
            {
              label: 'Billing',
              href: '/billing'
            },
            {
              label: 'Settings',
              href: '/settings'
            },
            {
              label: 'Invite Users',
              links: [
                {
                  label: 'Email',
                  href: '/email'
                },
                {
                  label: 'Message',
                  href: '/message'
                },
                {
                  separator: true
                },
                {
                  label: 'More...',
                  links: [
                    {
                      label: 'Option 1',
                      href: '/option-1'
                    },
                    {
                      label: 'Option 2',
                      href: '/option-2'
                    },
                    {
                      separator: true
                    },
                    {
                      label: 'Even more...',
                      links: [
                        {
                          label: 'Option A',
                          href: '/option-a'
                        },
                        {
                          label: 'Option B',
                          href: '/option-b'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: 'Log out',
              href: '/logout'
            }
          ]
        },
        {
          separator: true
        },
        {
          label: 'Settings',
          href: '/settings'
        }
      ]
    }
  }
};
