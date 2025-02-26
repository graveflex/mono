import { signUp as nextAuthSignUp } from '@mono/web/lib/auth/config';
import { getErrorCode } from '@mono/web/lib/auth/errors';

export async function signUp(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await nextAuthSignUp(formData);
    return {
      success: true,
      errorCode: '',
      email: formData.get('email') as string
    };
  } catch (err) {
    return {
      errorCode: getErrorCode(err),
      email: formData.get('email') as string,
      success: false
    };
  }
}
