import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_feature_section_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_feature_section_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_feature_section_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_feature_section_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_feature_section_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_feature_section_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_feature_section_locales" ADD CONSTRAINT "pages_blocks_feature_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_feature_section_locales" ADD CONSTRAINT "_pages_v_blocks_feature_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_feature_section_locales" ADD CONSTRAINT "homepage_blocks_feature_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_feature_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_feature_section_locales" ADD CONSTRAINT "_homepage_v_blocks_feature_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_feature_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_feature_section_locales" ADD CONSTRAINT "blog_index_blocks_feature_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_feature_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_feature_section_locales" ADD CONSTRAINT "_blog_index_v_blocks_feature_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_feature_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_feature_section_locales_locale_parent_id_unique" ON "pages_blocks_feature_section_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_feature_section_locales_locale_parent_id_unique" ON "_pages_v_blocks_feature_section_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_blocks_feature_section_locales_locale_parent_id_unique" ON "homepage_blocks_feature_section_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepage_v_blocks_feature_section_locales_locale_parent_id_unique" ON "_homepage_v_blocks_feature_section_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_blocks_feature_section_locales_locale_parent_id_unique" ON "blog_index_blocks_feature_section_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blog_index_v_blocks_feature_section_locales_locale_parent_id_unique" ON "_blog_index_v_blocks_feature_section_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_feature_section_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_section_locales" CASCADE;
  DROP TABLE "homepage_blocks_feature_section_locales" CASCADE;
  DROP TABLE "_homepage_v_blocks_feature_section_locales" CASCADE;
  DROP TABLE "blog_index_blocks_feature_section_locales" CASCADE;
  DROP TABLE "_blog_index_v_blocks_feature_section_locales" CASCADE;`)
}
