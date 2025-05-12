import type { Page } from '@mono/types/payload-types';
import config from '@payload-config';
import slugify from '@sindresorhus/slugify';
import camelize from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { getPayload } from 'payload';
import type { CollectionSlug, Payload } from 'payload';

type NonNullableBlocks = NonNullable<NonNullable<Page['blocks']>>;
type BlockSlug = NonNullableBlocks[number]['blockType'];
type CollectionCreateOpts = Parameters<Payload['create']>[0];

export type Dependency = CollectionSlug | BlockSlug;

export interface BlockSeedOptions<T extends { blockType: BlockSlug }> {
  blockType: T['blockType'];
  variantCount?: number;
  dependencies?: Dependency[];
  generateContent: (
    this: BlockSeed<T>,
    payload: Payload,
    variant: string
  ) => Promise<T[]>;
  generatePageName: (this: BlockSeed<T>, data: T) => string;
}

export class BlockSeed<
  T extends { blockType: BlockSlug } = { blockType: BlockSlug }
> {
  readonly blockType: T['blockType'];
  readonly variantCount: number;
  readonly dependencies: Dependency[];
  readonly generateContent: (
    this: BlockSeed<T>,
    payload: Payload,
    variant: string
  ) => Promise<T[]>;
  readonly generatePageName: (data: T) => string;
  readonly payload: Promise<Payload>;
  data: CollectionCreateOpts[] = [];

  constructor(options: BlockSeedOptions<T>) {
    this.blockType = options.blockType;
    this.variantCount = options.variantCount ?? 0;
    this.dependencies = options.dependencies ?? [];
    this.generateContent = options.generateContent.bind(this);
    this.generatePageName = options.generatePageName.bind(this);
    this.payload = getPayload({ config });
  }

  public get blockName() {
    return upperFirst(camelize(this.blockType)) as Capitalize<T['blockType']>;
  }

  public get name() {
    return this.blockType;
  }

  public async prepareData() {
    const payload = await this.payload;
    const pageContent = (
      await Promise.all(
        Array(this.variantCount)
          .fill(0)
          .map(async (_, i) => {
            const variantVariations = await this.generateContent(
              payload,
              `${i + 1}`
            );
            return variantVariations.map((data) => {
              const pageTitle = this.generatePageName(data);
              return {
                collection: 'pages',
                data: {
                  pageTitle,
                  slug: slugify(pageTitle),
                  _status: 'published',
                  blocks: [data]
                }
              } as CollectionCreateOpts;
            });
          })
      )
    ).flat();

    this.data = pageContent;
    return this.data;
  }

  public async saveSeeds(inc: () => void) {
    const payload = await this.payload;
    for (const s of this.data) {
      // clear any existing entries with the target slug
      if ('slug' in s.data) {
        await payload.delete({
          collection: s.collection,
          where: { slug: { equals: s.data.slug } }
        });
      }

      await payload.create(s);

      inc();
    }
  }
}
