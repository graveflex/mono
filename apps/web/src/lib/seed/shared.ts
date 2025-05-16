import type { Page } from '@mono/types/payload-types';
import type { CollectionSlug, GlobalSlug, Payload } from 'payload';

export type NonNullableBlocks = NonNullable<NonNullable<Page['blocks']>>;
export type BlockSlug = NonNullableBlocks[number]['blockType'];
export type CollectionCreateOpts = Parameters<Payload['create']>[0];
export type CollectionUpdateOpts = Parameters<Payload['update']>[0];

export type Dependency = CollectionSlug | BlockSlug | GlobalSlug;
