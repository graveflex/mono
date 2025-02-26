import { Checkbox } from '@mono/web/components/ui/Checkbox';
import type { CheckboxField as CheckboxFieldTypes } from '@payloadcms/plugin-form-builder/types';
type CheckboxTypes = {
  id?: string;
} & Omit<CheckboxFieldTypes, 'options' | 'blockType'>;
const CheckboxField = (args: CheckboxTypes) => {
  return (
    <div className="flex space-x-2">
      <Checkbox
        defaultChecked={args?.defaultValue}
        className="w-4"
        required={args?.required}
        name={args?.name}
      />
      <label
        htmlFor={args?.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
      >
        Accept terms and conditions
      </label>
    </div>
  );
};
export default CheckboxField;
