import * as migration_20250415_190600 from './20250415_190600';

export const migrations = [
  {
    up: migration_20250415_190600.up,
    down: migration_20250415_190600.down,
    name: '20250415_190600'
  },
];
