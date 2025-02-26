import type { Meta, StoryObj } from '@storybook/react';
import type { FormComponentTypes } from '.';
import FormComponent from '.';
import formFieldsMockData, {
  formFieldsRedirectMockData,
  emailSignupForm
} from './formMockData';

const meta: Meta<FormComponentTypes> = {
  title: 'ui/FormComponent',
  component: FormComponent,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<FormComponentTypes>;

export const Defaults: Story = {
  args: {
    form: formFieldsMockData
  }
};

export const RedirectOnSubmit: Story = {
  args: {
    form: formFieldsRedirectMockData
  }
};

export const EmailSignup: Story = {
  args: {
    form: emailSignupForm
  }
};
