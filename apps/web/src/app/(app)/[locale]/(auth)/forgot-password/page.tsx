import ForgotPasswordForm from './ForgotPasswordForm';
import { forgotPassword } from './actions';

async function ForgotPassword() {
  return <ForgotPasswordForm forgotPassword={forgotPassword} />;
}

export default ForgotPassword;
