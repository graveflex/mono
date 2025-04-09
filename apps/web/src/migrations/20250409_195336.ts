import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cta_sections_block_locales" ADD COLUMN "right_content" jsonb;
  ALTER TABLE "_pages_v_blocks_cta_sections_block_locales" ADD COLUMN "right_content" jsonb;
  ALTER TABLE "homepage_blocks_cta_sections_block_locales" ADD COLUMN "right_content" jsonb;
  ALTER TABLE "_homepage_v_blocks_cta_sections_block_locales" ADD COLUMN "right_content" jsonb;
  ALTER TABLE "blog_index_blocks_cta_sections_block_locales" ADD COLUMN "right_content" jsonb;
  ALTER TABLE "_blog_index_v_blocks_cta_sections_block_locales" ADD COLUMN "right_content" jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "_pages_v_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "homepage_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "_homepage_v_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "blog_index_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "_blog_index_v_blocks_cta_sections_block_locales" DROP COLUMN IF EXISTS "right_content";`)
}
