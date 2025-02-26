import { Input } from '@mono/web/components/ui/Input';
import { Textarea } from '@mono/web/components/ui/Textarea';
import CheckboxField from './Fields/Checkbox';
import SelectField from './Fields/SelectField';

export type FieldTypes = {
  text: typeof Input;
  email: typeof Input;
  select: typeof SelectField;
  textarea: typeof Textarea;
  number: typeof Input;
  checkbox: typeof CheckboxField;
};

const fields: FieldTypes = {
  text: Input,
  email: Input,
  select: SelectField,
  textarea: Textarea,
  number: Input,
  checkbox: CheckboxField
  // country: Country,
  // email: Email,
  // message: Message,
  // state: State,
};

export default fields;
