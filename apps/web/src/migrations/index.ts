import * as migration_20250508_160354 from './20250508_160354';

export const migrations = [
  {
    up: migration_20250508_160354.up,
    down: migration_20250508_160354.down,
    name: '20250508_160354'
  },
];
