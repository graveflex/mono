import type { Form } from '@mono/types/payload-types';
import type { RichTextType } from '@mono/web/components/RichText';

const formFieldsMockData: Form = {
  id: 1,
  title: 'Test Form One',
  fields: [
    {
      id: '67ad25c210f7761f28b6a7d9',
      name: 'text',
      width: 50,
      required: true,
      blockName: 'Enter text',
      blockType: 'text',
      label: 'Text',
      defaultValue: 'Default text value'
    },
    {
      id: '67ae65110017b722ef7747dd',
      name: 'email',
      width: 50,
      required: true,
      blockName: 'Enter email',
      blockType: 'email',
      label: 'Email'
    },
    {
      id: '67af9e3768650256c61fe2c1',
      name: 'comments',
      width: 100,
      required: null,
      blockName: 'Enter Comments',
      blockType: 'textarea',
      label: 'Comments',
      defaultValue: null
    },
    {
      id: '67afa18aeddbff769f06db76',
      name: 'fruits',
      width: 100,
      required: null,
      blockName: 'Select a fruit',
      options: [
        {
          id: '67afa1a1eddbff769f06db78',
          value: 'apple',
          label: 'Apple'
        },
        {
          id: '67afa1abeddbff769f06db7a',
          value: 'banana',
          label: 'Banana'
        },
        {
          id: '67afa1b4eddbff769f06db7c',
          value: 'cherry',
          label: 'Cherry'
        }
      ],
      blockType: 'select',
      label: 'Fruits',
      defaultValue: null
    },
    {
      id: '67afb9d52a43370416d3eccd',
      name: 'number',
      width: 75,
      defaultValue: null,
      required: null,
      blockName: 'Enter a number',
      blockType: 'number',
      label: 'Number'
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
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Thanks for signing up!',
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
  },
  redirect: {
    url: 'https://www.google.com'
  },
  emails: [],
  updatedAt: '2025-02-18T16:09:40.423Z',
  createdAt: '2025-02-12T22:55:37.194Z'
};

export const formFieldsRedirectMockData: Form = {
  id: 1,
  title: 'Test Form One',
  fields: [
    {
      id: '67ad25c210f7761f28b6a7d9',
      name: 'text',
      width: 50,
      required: true,
      blockName: 'Enter text',
      blockType: 'text',
      label: 'Text',
      defaultValue: 'Default text value'
    },
    {
      id: '67ae65110017b722ef7747dd',
      name: 'email',
      width: 50,
      required: true,
      blockName: 'Enter email',
      blockType: 'email',
      label: 'Email'
    },
    {
      id: '67af9e3768650256c61fe2c1',
      name: 'comments',
      width: 100,
      required: null,
      blockName: 'Enter comments',
      blockType: 'textarea',
      label: 'Comments',
      defaultValue: null
    },
    {
      id: '67afa18aeddbff769f06db76',
      name: 'fruits',
      width: 100,
      required: null,
      blockName: 'Select a fruit',
      options: [
        {
          id: '67afa1a1eddbff769f06db78',
          value: 'apple',
          label: 'Apple'
        },
        {
          id: '67afa1abeddbff769f06db7a',
          value: 'banana',
          label: 'Banana'
        },
        {
          id: '67afa1b4eddbff769f06db7c',
          value: 'cherry',
          label: 'Cherry'
        }
      ],
      blockType: 'select',
      label: 'Fruits',
      defaultValue: null
    },
    {
      id: '67afb9d52a43370416d3eccd',
      name: 'number',
      width: 75,
      defaultValue: null,
      required: null,
      blockName: 'Enter a number',
      blockType: 'number',
      label: 'Number'
    }
  ],
  submitButtonLabel: 'Sign up',
  confirmationType: 'redirect',
  confirmationMessage: {
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
              text: 'Thanks for signing up!',
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
  },
  redirect: {
    url: 'https://www.google.com'
  },
  emails: [],
  updatedAt: '2025-02-18T16:09:40.423Z',
  createdAt: '2025-02-12T22:55:37.194Z'
};

export const emailSignupForm: Form = {
  id: 2,
  title: 'Email Signup',
  fields: [
    {
      id: '67b4c1c616c28e7b485d12f9',
      name: 'email',
      width: 100,
      required: true,
      blockName: 'Your email',
      blockType: 'email'
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
              text: 'Thanks for signing up!',
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
    url: 'https://www.google.com'
  },
  emails: [],
  updatedAt: '2025-02-18T17:27:35.113Z',
  createdAt: '2025-02-18T17:22:48.027Z'
};

export const fallbackConfirmationMessage: RichTextType['data'] = {
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
            text: 'Thanks for submitting!',
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
};

export default formFieldsMockData;
