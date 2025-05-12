import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_posts_ctas_cta_link_link_type" ADD VALUE 'dropdownMenu';
  ALTER TYPE "public"."enum__posts_v_version_ctas_cta_link_link_type" ADD VALUE 'dropdownMenu';
  ALTER TYPE "public"."enum_navHeaderLinks_links0_links1_links2_links3_link_type" ADD VALUE 'dropdownMenu';
  ALTER TYPE "public"."enum_navHeaderLinks_links0_links1_links2_link_type" ADD VALUE 'dropdownMenu';
  ALTER TYPE "public"."enum_navHeaderLinks_links0_links1_link_type" ADD VALUE 'dropdownMenu';
  ALTER TYPE "public"."enum_navHeaderLinks_links0_link_type" ADD VALUE 'dropdownMenu';
  ALTER TYPE "public"."enum_navHeaderLinks_link_type" ADD VALUE 'dropdownMenu';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."posts_ctas" ALTER COLUMN "cta_link_link_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_posts_ctas_cta_link_link_type";
  CREATE TYPE "public"."enum_posts_ctas_cta_link_link_type" AS ENUM('custom', 'internal');
  ALTER TABLE "public"."posts_ctas" ALTER COLUMN "cta_link_link_type" SET DATA TYPE "public"."enum_posts_ctas_cta_link_link_type" USING "cta_link_link_type"::"public"."enum_posts_ctas_cta_link_link_type";
  ALTER TABLE "public"."_posts_v_version_ctas" ALTER COLUMN "cta_link_link_type" SET DATA TYPE text;
  DROP TYPE "public"."enum__posts_v_version_ctas_cta_link_link_type";
  CREATE TYPE "public"."enum__posts_v_version_ctas_cta_link_link_type" AS ENUM('custom', 'internal');
  ALTER TABLE "public"."_posts_v_version_ctas" ALTER COLUMN "cta_link_link_type" SET DATA TYPE "public"."enum__posts_v_version_ctas_cta_link_link_type" USING "cta_link_link_type"::"public"."enum__posts_v_version_ctas_cta_link_link_type";
  ALTER TABLE "public"."navHeaderLinks_links0_links1_links2_links3" ALTER COLUMN "link_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_navHeaderLinks_links0_links1_links2_links3_link_type";
  CREATE TYPE "public"."enum_navHeaderLinks_links0_links1_links2_links3_link_type" AS ENUM('custom', 'internal');
  ALTER TABLE "public"."navHeaderLinks_links0_links1_links2_links3" ALTER COLUMN "link_type" SET DATA TYPE "public"."enum_navHeaderLinks_links0_links1_links2_links3_link_type" USING "link_type"::"public"."enum_navHeaderLinks_links0_links1_links2_links3_link_type";
  ALTER TABLE "public"."navHeaderLinks_links0_links1_links2" ALTER COLUMN "link_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_navHeaderLinks_links0_links1_links2_link_type";
  CREATE TYPE "public"."enum_navHeaderLinks_links0_links1_links2_link_type" AS ENUM('custom', 'internal');
  ALTER TABLE "public"."navHeaderLinks_links0_links1_links2" ALTER COLUMN "link_type" SET DATA TYPE "public"."enum_navHeaderLinks_links0_links1_links2_link_type" USING "link_type"::"public"."enum_navHeaderLinks_links0_links1_links2_link_type";
  ALTER TABLE "public"."navHeaderLinks_links0_links1" ALTER COLUMN "link_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_navHeaderLinks_links0_links1_link_type";
  CREATE TYPE "public"."enum_navHeaderLinks_links0_links1_link_type" AS ENUM('custom', 'internal');
  ALTER TABLE "public"."navHeaderLinks_links0_links1" ALTER COLUMN "link_type" SET DATA TYPE "public"."enum_navHeaderLinks_links0_links1_link_type" USING "link_type"::"public"."enum_navHeaderLinks_links0_links1_link_type";
  ALTER TABLE "public"."navHeaderLinks_links0" ALTER COLUMN "link_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_navHeaderLinks_links0_link_type";
  CREATE TYPE "public"."enum_navHeaderLinks_links0_link_type" AS ENUM('custom', 'internal');
  ALTER TABLE "public"."navHeaderLinks_links0" ALTER COLUMN "link_type" SET DATA TYPE "public"."enum_navHeaderLinks_links0_link_type" USING "link_type"::"public"."enum_navHeaderLinks_links0_link_type";
  ALTER TABLE "public"."navHeaderLinks" ALTER COLUMN "link_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_navHeaderLinks_link_type";
  CREATE TYPE "public"."enum_navHeaderLinks_link_type" AS ENUM('custom', 'internal');
  ALTER TABLE "public"."navHeaderLinks" ALTER COLUMN "link_type" SET DATA TYPE "public"."enum_navHeaderLinks_link_type" USING "link_type"::"public"."enum_navHeaderLinks_link_type";`)
}
