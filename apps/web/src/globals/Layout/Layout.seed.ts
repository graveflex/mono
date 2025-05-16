import type { Nav } from '@mono/types/payload-types';
import { GlobalSeed } from '@mono/web/lib/seed/global';
import { apiResponse } from './Layout.mock';

export const Seed = new GlobalSeed<Nav>({
  slug: 'nav',
  dependencies: [],
  generateContent: async () => [apiResponse]
});
