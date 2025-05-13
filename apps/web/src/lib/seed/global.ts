import config from '@payload-config';
import { getPayload } from 'payload';
import type { GlobalSlug, Payload } from 'payload';
import type { Dependency } from './block';

type GlobalUpdateOpts = Parameters<Payload['update']>[0];

export interface GlobalSeedOptions<T = unknown> {
  slug: GlobalSlug;
  dependencies?: Dependency[];
  generateContent: (this: GlobalSeed<T>, payload: Payload) => Promise<T[]>;
}

export class GlobalSeed<T = unknown> {
  readonly slug: GlobalSlug;
  readonly dependencies: Dependency[];
  readonly generateContent: (
    this: GlobalSeed<T>,
    payload: Payload
  ) => Promise<T[]>;
  readonly payload: Promise<Payload>;
  data: GlobalUpdateOpts[] = [];

  constructor(options: GlobalSeedOptions<T>) {
    this.slug = options.slug;
    this.dependencies = options.dependencies ?? [];
    this.generateContent = options.generateContent.bind(this);
    this.payload = getPayload({ config });
  }

  public get name() {
    return this.slug;
  }

  public async prepareData() {
    const payload = await this.payload;
    const data = await this.generateContent(payload);

    // keep as array to maintain the same structure as BlockSeed and AssetSeed
    return [
      {
        slug: this.slug,
        data
      }
    ];
  }

  public async saveSeeds(inc: () => void) {
    const payload = await this.payload;
    for (const s of this.data) {
      await payload.update(s);
      inc();
    }
  }
}
