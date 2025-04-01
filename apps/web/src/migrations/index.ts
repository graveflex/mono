import * as migration_20250224_173221 from './20250224_173221';
import * as migration_20250401_191926 from './20250401_191926';

export const migrations = [
  {
    up: migration_20250224_173221.up,
    down: migration_20250224_173221.down,
    name: '20250224_173221',
  },
  {
    up: migration_20250401_191926.up,
    down: migration_20250401_191926.down,
    name: '20250401_191926'
  },
];
