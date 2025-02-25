import type { ArrayField, Field } from 'payload';
import { baseFields } from '@mono/web/payload/fields/Link';

function linkTree(maxDepth = 4, currentDepth = 0): Field[] {
  const fields = [...baseFields];

  if (currentDepth < maxDepth) {
    fields.push({
      type: 'array',
      name: `links${currentDepth}`,
      fields: linkTree(maxDepth, currentDepth + 1)
    });
  }

  return fields;
}

export default function NestedLinkArray({
  name = 'nestedLinks',
  dbName = undefined
}: Partial<ArrayField> = {}): ArrayField {
  if (!dbName) {
    throw new Error('You must specify a DB name for nested links.');
  }

  return {
    type: 'array',
    name,
    dbName,
    fields: linkTree()
  };
}
