import type { Block } from 'payload';

export const Video: Block = {
  slug: 'video',
  fields: [
    {
      name: 'file',
      type: 'upload',
      relationTo: 'videos',
      required: true
    },
    {
      name: 'preview_image',
      label: 'Preview Image',
      type: 'upload',
      relationTo: 'images',
      required: true,
      admin: {
        description:
          'This image will be shown as a preview before the video is played.'
      }
    },
    {
      name: 'downloadable',
      type: 'checkbox',
      label: 'Downloadable',
      required: false,
      admin: {
        description:
          'If checked, users will be shown a button to download the audio file.'
      }
    }
  ]
};
