import * as migration_20250403_201402 from './20250403_201402';
import * as migration_20250408_154448 from './20250408_154448';
import * as migration_20250409_144037 from './20250409_144037';

export const migrations = [
  {
    up: migration_20250403_201402.up,
    down: migration_20250403_201402.down,
    name: '20250403_201402',
  },
  {
    up: migration_20250408_154448.up,
    down: migration_20250408_154448.down,
    name: '20250408_154448',
  },
  {
    up: migration_20250409_144037.up,
    down: migration_20250409_144037.down,
    name: '20250409_144037'
  },
];
