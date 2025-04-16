import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_feature_section_locales" ADD COLUMN "additional_content" jsonb;
  ALTER TABLE "_pages_v_blocks_feature_section_locales" ADD COLUMN "additional_content" jsonb;
  ALTER TABLE "homepage_blocks_feature_section_locales" ADD COLUMN "additional_content" jsonb;
  ALTER TABLE "_homepage_v_blocks_feature_section_locales" ADD COLUMN "additional_content" jsonb;
  ALTER TABLE "blog_index_blocks_feature_section_locales" ADD COLUMN "additional_content" jsonb;
  ALTER TABLE "_blog_index_v_blocks_feature_section_locales" ADD COLUMN "additional_content" jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_feature_section_locales" DROP COLUMN IF EXISTS "additional_content";
  ALTER TABLE "_pages_v_blocks_feature_section_locales" DROP COLUMN IF EXISTS "additional_content";
  ALTER TABLE "homepage_blocks_feature_section_locales" DROP COLUMN IF EXISTS "additional_content";
  ALTER TABLE "_homepage_v_blocks_feature_section_locales" DROP COLUMN IF EXISTS "additional_content";
  ALTER TABLE "blog_index_blocks_feature_section_locales" DROP COLUMN IF EXISTS "additional_content";
  ALTER TABLE "_blog_index_v_blocks_feature_section_locales" DROP COLUMN IF EXISTS "additional_content";`)
}
