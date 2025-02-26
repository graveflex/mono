import { signIn as nextAuthSignIn } from '@mono/web/auth';
import { getErrorCode } from '@mono/web/lib/auth/errors';

export async function signIn(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await nextAuthSignIn('credentials', formData);
    return {
      success: true,
      errorCode: '',
      email: formData.get('email') as string
    };
  } catch (err) {
    return {
      errorCode: getErrorCode(err),
      success: false,
      email: formData.get('email') as string
    };
  }
}
