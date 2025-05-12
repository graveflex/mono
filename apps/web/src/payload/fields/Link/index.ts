import { type LinkFields, validateUrl } from '@payloadcms/richtext-lexical';
import type {
  CollectionSlug,
  Field,
  GroupField,
  RadioField,
  TextFieldSingleValidation
} from 'payload';

const enabledCollections = ['pages', 'files', 'posts'];

// these fields were copied from the lexical plugin. they should match exactly with
// the inline links used in the rich text editor
export const baseFields: Field[] = [
  {
    name: 'text',
    type: 'text',
    label: ({ t }) => t('fields:textToDisplay'),
    required: true
  },
  {
    name: 'linkType',
    type: 'radio',
    admin: {
      description: ({ t }) => t('fields:chooseBetweenCustomTextOrDocument')
    },
    defaultValue: 'custom',
    label: ({ t }) => t('fields:linkType'),
    options: [
      {
        label: ({ t }) => t('fields:customURL'),
        value: 'custom'
      },
      {
        label: ({ t }) => t('fields:internalLink'),
        value: 'internal'
      },
      {
        label: 'Unlinked Text',
        value: 'dropdownMenu'
      }
    ],
    required: true
  } as RadioField,
  {
    name: 'url',
    type: 'text',
    admin: {
      condition: (_data, _siblingData) => {
        return _siblingData.linkType !== 'internal';
      }
    },
    hooks: {
      beforeChange: [
        ({ value }) => {
          if (!value) {
            return;
          }

          if (!validateUrl(value)) {
            return encodeURIComponent(value);
          }
          return value;
        }
      ]
    },
    label: ({ t }) => t('fields:enterURL'),
    required: false,
    validate: ((value: string, options) => {
      const linkType = (options?.siblingData as LinkFields)?.linkType;
      if (linkType !== 'custom') {
        return; // no validation needed, as no url should exist for internal links or dropdown menus
      }

      if (!validateUrl(value)) {
        return 'Invalid URL';
      }
    }) as TextFieldSingleValidation
  },
  {
    name: 'doc',
    admin: {
      condition: (_data, _siblingData) => {
        return _siblingData.linkType === 'internal';
      }
    },
    // when admin.hidden is a function we need to dynamically call hidden with the user to know if the collection should be shown
    type: 'relationship',
    label: ({ t }) => t('fields:chooseDocumentToLink'),
    maxDepth: 1,
    relationTo: enabledCollections as CollectionSlug[],
    required: true
  },
  {
    name: 'newTab',
    type: 'checkbox',
    label: ({ t }) => t('fields:openInNewTab')
  }
];

function Link({ name, interfaceName }: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'link',
    type: 'group',
    interfaceName: interfaceName || 'payLoadLink',
    fields: [...baseFields]
  };
}

export default Link;
