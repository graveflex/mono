import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pageFaqSectionsBlock_locales" ADD COLUMN "top_right_content" jsonb;
  ALTER TABLE "_pageFaqSectionsBlock_v_locales" ADD COLUMN "top_right_content" jsonb;
  ALTER TABLE "homepageFaqSectionsBlock_locales" ADD COLUMN "top_right_content" jsonb;
  ALTER TABLE "_homepageFaqSectionsBlock_v_locales" ADD COLUMN "top_right_content" jsonb;
  ALTER TABLE "blogIdxFaqSectionsBlock_locales" ADD COLUMN "top_right_content" jsonb;
  ALTER TABLE "_blogIdxFaqSectionsBlock_v_locales" ADD COLUMN "top_right_content" jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pageFaqSectionsBlock_locales" DROP COLUMN IF EXISTS "top_right_content";
  ALTER TABLE "_pageFaqSectionsBlock_v_locales" DROP COLUMN IF EXISTS "top_right_content";
  ALTER TABLE "homepageFaqSectionsBlock_locales" DROP COLUMN IF EXISTS "top_right_content";
  ALTER TABLE "_homepageFaqSectionsBlock_v_locales" DROP COLUMN IF EXISTS "top_right_content";
  ALTER TABLE "blogIdxFaqSectionsBlock_locales" DROP COLUMN IF EXISTS "top_right_content";
  ALTER TABLE "_blogIdxFaqSectionsBlock_v_locales" DROP COLUMN IF EXISTS "top_right_content";`)
}
