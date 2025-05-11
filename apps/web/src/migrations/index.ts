import * as migration_20250511_202314 from './20250511_202314';

export const migrations = [
  {
    up: migration_20250511_202314.up,
    down: migration_20250511_202314.down,
    name: '20250511_202314'
  },
];
