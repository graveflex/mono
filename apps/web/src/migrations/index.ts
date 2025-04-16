import * as migration_20250416_163735 from './20250416_163735';

export const migrations = [
  {
    up: migration_20250416_163735.up,
    down: migration_20250416_163735.down,
    name: '20250416_163735'
  },
];
