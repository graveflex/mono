import type { Link } from './shared';

export const data: Link[] = [
  {
    label: 'Flat-1',
    href: '/flat-1'
  },
  {
    label: 'Flat-2',
    href: '/flat-2'
  },
  {
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
  },
  {
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
  },
  {
    label: 'Flat',
    href: '/flat'
  }
];

export const apiResponse = {
  header: {
    /*
    logo: null,
    banner: {
      content: null,
      background: null
    },
    */
    links: [
      {
        id: '682224d321084bcd67b9a155',
        text: 'Flat 1',
        linkType: 'custom',
        url: '/flat-1',
        newTab: null,
        links0: []
      },
      {
        id: '682224e821084bcd67b9a159',
        text: 'Flat 2',
        linkType: 'custom',
        url: '/flat-2',
        newTab: null,
        links0: []
      },
      {
        id: '682224f521084bcd67b9a15b',
        text: 'Shallow Nested',
        linkType: 'custom',
        url: '/shallow-nested',
        newTab: null,

        links0: [
          {
            id: '6822250421084bcd67b9a15d',
            text: 'Link One',
            linkType: 'custom',
            url: '/link-one',
            newTab: null,

            links1: [
              {
                id: '6822251121084bcd67b9a15f',
                text: 'Link Two',
                linkType: 'custom',
                url: '/link-two',
                newTab: null,
                links2: []
              }
            ]
          }
        ]
      },
      {
        id: '6822284a7c898bdac0bbfa7b',
        text: 'Deep Nested',
        linkType: 'dropdownMenu',
        url: null,
        newTab: null,

        links0: [
          {
            id: '682228557c898bdac0bbfa7d',
            text: 'My Account',
            linkType: 'custom',
            url: '/account',
            newTab: null,

            links1: [
              {
                id: '6822285f7c898bdac0bbfa7f',
                text: 'Profile',
                linkType: 'custom',
                url: '/profile',
                newTab: null,
                links2: []
              },
              {
                id: '682228747c898bdac0bbfa83',
                text: 'Billing',
                linkType: 'custom',
                url: '/billing',
                newTab: null,
                links2: []
              },
              {
                id: '682228807c898bdac0bbfa85',
                text: 'Invite Users',
                linkType: 'dropdownMenu',
                url: null,
                newTab: null,

                links2: [
                  {
                    id: '6822288e7c898bdac0bbfa87',
                    text: 'Email',
                    linkType: 'custom',
                    url: '/email',
                    newTab: null,
                    links3: []
                  },

                  {
                    id: '6822289c7c898bdac0bbfa89',
                    text: 'Message',
                    linkType: 'custom',
                    url: '/message',
                    newTab: null,
                    links3: []
                  }
                ]
              },

              {
                id: '682228ab7c898bdac0bbfa8b',
                text: 'Log Out',
                linkType: 'custom',
                url: '/log-out',
                newTab: null,
                links2: []
              }
            ]
          },

          {
            id: '682228b77c898bdac0bbfa8d',
            text: 'Settings',
            linkType: 'custom',
            url: '/settings',
            newTab: null,
            links1: []
          }
        ]
      },

      {
        id: '682228c07c898bdac0bbfa8f',
        text: 'Flat 3',
        linkType: 'custom',
        url: '/flat-3',
        newTab: null,
        links0: []
      }
    ]
  }
};
