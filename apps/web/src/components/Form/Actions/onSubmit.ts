'use server';
import type { Form } from '@mono/types/payload-types';
import { WEB_URL } from '@mono/web/lib/constants';

type onSubmitTypes = {
  formData: FormData;
  formId?: Form['id'];
};

const onSubmit = async ({ formData, formId }: onSubmitTypes) => {
  'use server';
  const entries = [];

  for (const pair of formData.entries()) {
    entries.push(pair);
  }

  const dataToSend = entries.map(([name, value]) => ({
    field: name,
    value
  }));

  const res = await fetch(`${WEB_URL}/api/form-submissions`, {
    body: JSON.stringify({
      form: formId,
      submissionData: dataToSend
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  if (!res.ok) {
    throw new Error('There was an error submitting your form.');
  }

  return res.json();
};

export default onSubmit;
