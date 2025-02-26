import { error } from 'console';
import { password } from '@inquirer/prompts';
import { resetPassword as handleResetPassword } from '@mono/web/lib/auth/config';
import { getErrorCode } from '@mono/web/lib/auth/errors';

export async function resetPassword(_prevState: unknown, formData: FormData) {
  'use server';

  try {
    await handleResetPassword(formData);
    return { errorCode: '', success: true };
  } catch (err) {
    return { errorCode: getErrorCode(err), success: false };
  }
}
