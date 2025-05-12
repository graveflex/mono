import * as migration_20250511_210735 from './20250511_210735';
import * as migration_20250512_165513 from './20250512_165513';

export const migrations = [
  {
    up: migration_20250511_210735.up,
    down: migration_20250511_210735.down,
    name: '20250511_210735',
  },
  {
    up: migration_20250512_165513.up,
    down: migration_20250512_165513.down,
    name: '20250512_165513'
  },
];
