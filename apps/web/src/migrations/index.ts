import * as migration_20250514_201043 from './20250514_201043';

export const migrations = [
  {
    up: migration_20250514_201043.up,
    down: migration_20250514_201043.down,
    name: '20250514_201043'
  },
];
