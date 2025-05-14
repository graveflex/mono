import config from '@payload-config';
import { sql } from '@payloadcms/db-postgres/drizzle';
import { getPayload } from 'payload';
import type { CollectionSlug, Payload } from 'payload';
import type { Dependency } from './shared';

type CollectionCreateOpts = Parameters<Payload['create']>[0];

export interface AssetSeedOptions {
  collection: CollectionSlug;
  dependencies?: Dependency[];
  generateContent: (this: AssetSeed) => Promise<CollectionCreateOpts[]>;
}

export class AssetSeed {
  readonly collection: CollectionSlug;
  readonly name: CollectionSlug;
  readonly dependencies: Dependency[];
  readonly generateContent: () => Promise<CollectionCreateOpts[]>;
  data: CollectionCreateOpts[] = [];

  constructor(options: AssetSeedOptions) {
    this.collection = options.collection;
    this.name = this.collection;
    this.dependencies = options.dependencies ?? [];
    this.generateContent = options.generateContent.bind(this);
  }

  public async prepareData() {
    this.data = await this.generateContent();
    return this.data;
  }

  public async saveSeeds(inc: () => void) {
    const payload = await getPayload({ config });
    for (const s of this.data) {
      await payload.create(s);
      inc();
    }
  }

  // NOTE: this assumes that the table name is the same as the collection name (i.e. images).
  // if the dbName differs from the collection slug, logic will need to be added to resolve
  public static async getRandomEntry<T extends CollectionSlug>(collection: T) {
    const payload = await getPayload({ config });

    const resp = await payload.db.drizzle.execute(
      sql`SELECT id FROM ${sql.raw(collection)} ORDER BY random() LIMIT 1`
    );
    const randomRow = resp.rows[0];

    return payload.findByID({
      collection,
      id: randomRow.id as number
    });
  }
}
