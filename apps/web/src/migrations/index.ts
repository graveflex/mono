import * as migration_20250508_160309 from './20250508_160309';

export const migrations = [
  {
    up: migration_20250508_160309.up,
    down: migration_20250508_160309.down,
    name: '20250508_160309'
  },
];
