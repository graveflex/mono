import * as migration_20250416_194451 from './20250416_194451';
import * as migration_20250416_202553 from './20250416_202553';

export const migrations = [
  {
    up: migration_20250416_194451.up,
    down: migration_20250416_194451.down,
    name: '20250416_194451',
  },
  {
    up: migration_20250416_202553.up,
    down: migration_20250416_202553.down,
    name: '20250416_202553'
  },
];
