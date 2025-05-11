import * as migration_20250511_210735 from './20250511_210735';

export const migrations = [
  {
    up: migration_20250511_210735.up,
    down: migration_20250511_210735.down,
    name: '20250511_210735'
  },
];
