import * as migration_20250403_201402 from './20250403_201402';

export const migrations = [
  {
    up: migration_20250403_201402.up,
    down: migration_20250403_201402.down,
    name: '20250403_201402'
  },
];
