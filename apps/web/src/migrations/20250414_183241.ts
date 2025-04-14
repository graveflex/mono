import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_pages_v_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "homepage_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_homepage_v_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "blog_index_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "_blog_index_v_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cta_sections_block_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_blocks_cta_sections_block_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "homepage_blocks_cta_sections_block_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "_homepage_v_blocks_cta_sections_block_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "blog_index_blocks_cta_sections_block_locales" ADD COLUMN "title" varchar;
  ALTER TABLE "_blog_index_v_blocks_cta_sections_block_locales" ADD COLUMN "title" varchar;`)
}
