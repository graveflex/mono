import type { CollectionConfig } from 'payload';

const Admins: CollectionConfig = {
  slug: 'admins',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ]
};

export default Admins;
