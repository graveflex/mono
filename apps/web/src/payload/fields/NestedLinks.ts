import { baseFields } from '@mono/web/payload/fields/Link';
import type { ArrayField, Field } from 'payload';

function linkTree(maxDepth = 4, currentDepth = 0): Field[] {
  const fields = [...baseFields];

  if (currentDepth < maxDepth) {
    fields.push({
      type: 'array',
      name: `links${currentDepth}`,
      label: 'Sub-Links',
      fields: linkTree(maxDepth, currentDepth + 1)
    });
  }

  return fields;
}

export default function NestedLinkArray({
  name = 'links',
  label = 'Links',
  dbName = undefined
}: Partial<ArrayField> = {}): ArrayField {
  if (!dbName) {
    throw new Error('You must specify a DB name for nested links.');
  }

  return {
    type: 'array',
    name,
    label,
    dbName,
    fields: linkTree()
  };
}
