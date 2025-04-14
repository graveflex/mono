import * as migration_20250409_163812 from './20250409_163812';

export const migrations = [
  {
    up: migration_20250409_163812.up,
    down: migration_20250409_163812.down,
    name: '20250409_163812'
  },
];
