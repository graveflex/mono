import { WEB_URL } from '@mono/web/lib/constants';
import type { CollectionConfig } from 'payload';
import { v4 as uuidv4 } from 'uuid';

const UserEmailProviders: CollectionConfig = {
  slug: 'userEmailProviders',
  auth: {
    verify: false,
    forgotPassword: {
      expiration: 1000 * 60 * 60 * 1, // 1 hour
      generateEmailSubject: () => 'Forgot Password',
      generateEmailHTML: ({ token, user } = {}) => {
        // Use the token provided to allow your user to verify their account
        const url = `${WEB_URL}/forgot-password/verify?token=${token}`;
        const name = user?.name || user?.email || 'there';

        return `Hey ${name}, you can reset your password by clicking here: ${url}
        
If you didn't request this, you can ignore this email. This link will expire in 1 hour.`;
      }
    }
  },
  admin: {
    useAsTitle: 'email'
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users'
    }
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation === 'create') {
          const email = data.email;
          const existingAuthjsUserResp = await req.payload.find({
            collection: 'users',
            where: { email: { equals: email } },
            limit: 1
          });

          let authjsUser = existingAuthjsUserResp.docs[0];
          if (!authjsUser) {
            authjsUser = await req.payload.create({
              collection: 'users',
              data: {
                id: uuidv4(),
                email
              }
            });
          }

          data.user = authjsUser?.id;
        }

        return data;
      }
    ]
  }
};

export default UserEmailProviders;
