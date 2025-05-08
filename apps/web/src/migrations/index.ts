import * as migration_20250410_180226 from './20250410_180226';

export const migrations = [
  {
    up: migration_20250410_180226.up,
    down: migration_20250410_180226.down,
    name: '20250410_180226'
  },
];
