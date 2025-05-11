import type { CollectionConfig } from 'payload';

const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      localized: true,
      required: false
    },
    {
      name: 'imageProps',
      label: 'Image Properties',
      type: 'group',
      fields: [
        {
          name: 'priority',
          label: 'Load Priority',
          type: 'checkbox',
          defaultValue: false,
          required: false
        },
        {
          name: 'quality',
          label: 'Image Quality',
          type: 'number',
          defaultValue: 75,
          required: false
        }
      ]
    }
  ],
  upload: {
    staticDir: 'images',
    imageSizes: [
      {
        name: 'blur',
        width: 10,
        position: 'centre'
      },
      {
        name: 'thumbnail',
        width: 300,
        position: 'centre'
      },
      {
        name: 'mobile',
        width: 768,
        position: 'centre'
      },
      {
        name: 'tablet',
        width: 1024,
        position: 'center'
      },
      {
        name: 'desktop',
        width: 2048,
        position: 'centre'
      },
      {
        name: 'ultrawide',
        width: 4096,
        position: 'centre'
      }
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
  }
};

export default Images;
