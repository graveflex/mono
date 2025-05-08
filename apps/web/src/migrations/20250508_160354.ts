import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en-US', 'es-US');
  CREATE TYPE "public"."enum_pagePricingSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."cw" AS ENUM('full', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs');
  CREATE TYPE "public"."t" AS ENUM('pt-0', 'pt-2', 'pt-4', 'pt-6', 'pt-8', 'pt-10', 'pt-16');
  CREATE TYPE "public"."b" AS ENUM('pb-0', 'pb-2', 'pb-4', 'pb-6', 'pb-8', 'pb-10', 'pb-16');
  CREATE TYPE "public"."enum_pagePricingSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pageTestimonialsSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pageTestimonialsSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_pageHeaderSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pageHeaderSectionsBlock_variant" AS ENUM('1', '2');
  CREATE TYPE "public"."enum_pageContactSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pageContactSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_pageFaqSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pageFaqSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pageBannersBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pageBannersBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_pages_blocks_cta_sections_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_pages_blocks_cta_sections_block_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_feature_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_feature_section_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
  CREATE TYPE "public"."enum_pageherSecB_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."vrnt" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum_pageherSecB_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_pages_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pagePricingSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pagePricingSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pageTestimonialsSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageTestimonialsSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__pageHeaderSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageHeaderSectionsBlock_v_variant" AS ENUM('1', '2');
  CREATE TYPE "public"."enum__pageContactSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageContactSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__pageFaqSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageFaqSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pageBannersBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageBannersBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_sections_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_sections_block_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_section_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
  CREATE TYPE "public"."enum__pageherSecB_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pageherSecB_v_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__pages_v_version_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en-US', 'es-US');
  CREATE TYPE "public"."undefined_cta_t" AS ENUM('internal', 'external', 'email', 'phone', 'file');
  CREATE TYPE "public"."undefined_link_ic" AS ENUM('Hamburger', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
  CREATE TYPE "public"."undefined_link_iw" AS ENUM('35', '30', '25', '20');
  CREATE TYPE "public"."card_cta_v" AS ENUM('outline', 'solid', 'link');
  CREATE TYPE "public"."card_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en-US', 'es-US');
  CREATE TYPE "public"."enum_exports_format" AS ENUM('csv', 'json');
  CREATE TYPE "public"."enum_exports_locale" AS ENUM('all', 'en-US', 'es-US');
  CREATE TYPE "public"."enum_exports_drafts" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'NukeCache');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'NukeCache');
  CREATE TYPE "public"."iconnavitem_ic" AS ENUM('Hamburger', 'Check', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'CaretDown', 'CaretUp', 'CaretRight', 'CaretLeft', 'Close', 'DoubleCaretDown', 'DoubleCaretUp', 'DoubleCaretRight', 'DoubleCaretLeft', 'Error', 'LinkOut', 'MinusSign', 'Person', 'PlusSign', 'Quote', 'Search', 'SolidArrowDown', 'SolidArrowUp', 'SolidArrowRight', 'SolidArrowLeft', 'ArrowNesting');
  CREATE TYPE "public"."iconnavitem_iw" AS ENUM('35', '30', '25', '20');
  CREATE TYPE "public"."enum_nav_header_banner_background" AS ENUM('white', 'black', 'gray');
  CREATE TYPE "public"."undefined_cta_v" AS ENUM('outline', 'solid', 'link');
  CREATE TYPE "public"."undefined_cta_tv" AS ENUM('lightTheme', 'darkTheme', 'contrast');
  CREATE TYPE "public"."enum_homepagePricingSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepagePricingSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_homepageTestimonialsSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageTestimonialsSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_homepageHeaderSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageHeaderSectionsBlock_variant" AS ENUM('1', '2');
  CREATE TYPE "public"."enum_homepageContactSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageContactSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_homepageFaqSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageFaqSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_homepageBannersBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageBannersBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_homepage_blocks_cta_sections_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_homepage_blocks_cta_sections_block_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_homepage_blocks_feature_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_feature_section_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
  CREATE TYPE "public"."enum_homepageherSecB_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepageherSecB_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_homepage_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_homepage_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_homepage_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__homepagePricingSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepagePricingSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__homepageTestimonialsSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageTestimonialsSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__homepageHeaderSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageHeaderSectionsBlock_v_variant" AS ENUM('1', '2');
  CREATE TYPE "public"."enum__homepageContactSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageContactSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__homepageFaqSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageFaqSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__homepageBannersBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageBannersBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__homepage_v_blocks_cta_sections_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__homepage_v_blocks_cta_sections_block_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__homepage_v_blocks_feature_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_blocks_feature_section_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
  CREATE TYPE "public"."enum__homepageherSecB_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepageherSecB_v_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__homepage_v_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__homepage_v_version_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__homepage_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__homepage_v_published_locale" AS ENUM('en-US', 'es-US');
  CREATE TYPE "public"."enum_blogIdxPricingSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxPricingSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_blogIdxTestimonialsSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxTestimonialsSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_blogIdxHeaderSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxHeaderSectionsBlock_variant" AS ENUM('1', '2');
  CREATE TYPE "public"."enum_blogIdxContactSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxContactSectionsBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_blogIdxFaqSectionsBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxFaqSectionsBlock_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_blogIdxBannersBlock_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxBannersBlock_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_blog_index_blocks_cta_sections_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blog_index_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_blog_index_blocks_cta_sections_block_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_blog_index_blocks_feature_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blog_index_blocks_feature_section_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
  CREATE TYPE "public"."enum_blogIdxherSecB_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blogIdxherSecB_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_blog_index_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum_blog_index_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_blog_index_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_blog_index_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blogIdxPricingSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxPricingSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__blogIdxTestimonialsSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxTestimonialsSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__blogIdxHeaderSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxHeaderSectionsBlock_v_variant" AS ENUM('1', '2');
  CREATE TYPE "public"."enum__blogIdxContactSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxContactSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__blogIdxFaqSectionsBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxFaqSectionsBlock_v_variant" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__blogIdxBannersBlock_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxBannersBlock_v_variant" AS ENUM('1', '2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__blog_index_v_blocks_feature_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_blocks_feature_section_variant" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
  CREATE TYPE "public"."enum__blogIdxherSecB_v_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blogIdxherSecB_v_media_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__blog_index_v_blocks_blog_section_wrapper_theme" AS ENUM('_', 'light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_blocks_blog_section_variant" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__blog_index_v_version_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__blog_index_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blog_index_v_published_locale" AS ENUM('en-US', 'es-US');
  CREATE TABLE IF NOT EXISTS "pagePricingSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pagePricingSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pagePricingSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pageTestimonialsSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageTestimonialsSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pageTestimonialsSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pageHeaderSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageHeaderSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pageHeaderSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pageHeaderSectionsBlock_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pageContactSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageContactSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pageContactSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pageFaqSectionsBlock_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pageFaqSectionsBlock_items_locales" (
  	"title" varchar,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pageFaqSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageFaqSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pageFaqSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pageFaqSectionsBlock_locales" (
  	"content" jsonb,
  	"top_right_content" jsonb,
  	"bottom_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pageBannersBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageBannersBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pageBannersBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pages_blocks_cta_sections_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pages_blocks_cta_sections_block_variant" DEFAULT '1',
  	"media_position" "enum_pages_blocks_cta_sections_block_media_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta_sections_block_locales" (
  	"content" jsonb,
  	"right_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_feature_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pages_blocks_feature_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pages_blocks_feature_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pageherSecB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pageherSecB_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "vrnt" DEFAULT '1',
  	"media_position" "enum_pageherSecB_media_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pageherSecB_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_pages_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_pages_blocks_blog_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_keywords" varchar,
  	"slug" varchar,
  	"theme" "enum_pages_theme",
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_locales" (
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"page_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pagePricingSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pagePricingSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pagePricingSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageTestimonialsSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageTestimonialsSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pageTestimonialsSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageHeaderSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageHeaderSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pageHeaderSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageHeaderSectionsBlock_v_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pageContactSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageContactSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pageContactSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageFaqSectionsBlock_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageFaqSectionsBlock_v_items_locales" (
  	"title" varchar,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pageFaqSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageFaqSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pageFaqSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageFaqSectionsBlock_v_locales" (
  	"content" jsonb,
  	"top_right_content" jsonb,
  	"bottom_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pageBannersBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageBannersBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pageBannersBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pages_v_blocks_cta_sections_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pages_v_blocks_cta_sections_block_variant" DEFAULT '1',
  	"media_position" "enum__pages_v_blocks_cta_sections_block_media_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_sections_block_locales" (
  	"content" jsonb,
  	"right_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_feature_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pages_v_blocks_feature_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pages_v_blocks_feature_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageherSecB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pageherSecB_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "vrnt" DEFAULT '1',
  	"media_position" "enum__pageherSecB_v_media_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pageherSecB_v_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__pages_v_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__pages_v_blocks_blog_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_meta_keywords" varchar,
  	"version_slug" varchar,
  	"version_theme" "enum__pages_v_version_theme",
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_locales" (
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_page_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "posts_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "card_cta_v" DEFAULT 'solid',
  	"cta_color" "card_cta_tv"
  );
  
  CREATE TABLE IF NOT EXISTS "posts_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_content_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"thumbnail_id" integer,
  	"cover_image_id" integer,
  	"slug" varchar,
  	"published_at" timestamp(3) with time zone,
  	"meta_keywords" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_locales" (
  	"title" varchar,
  	"sub_title" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"authors_id" integer,
  	"tags_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_ctas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"cta_link_label" varchar,
  	"cta_link_internal_href_id" integer,
  	"cta_link_external_href" varchar,
  	"cta_link_email_href" varchar,
  	"cta_link_phone_href" varchar,
  	"cta_link_file_href_id" integer,
  	"cta_link_new_tab" boolean,
  	"cta_link_icon_name" "undefined_link_ic",
  	"cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"cta_link_icon_color" varchar,
  	"cta_variant" "card_cta_v" DEFAULT 'solid',
  	"cta_color" "card_cta_tv",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_content_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_thumbnail_id" integer,
  	"version_cover_image_id" integer,
  	"version_slug" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_meta_keywords" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__posts_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_locales" (
  	"version_title" varchar,
  	"version_sub_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"authors_id" integer,
  	"tags_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "authors" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"full_name" varchar NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "authors_locales" (
  	"job_title" varchar NOT NULL,
  	"bio" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tags" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tags_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "files" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_props_priority" boolean DEFAULT false,
  	"image_props_quality" numeric DEFAULT 75,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_blur_url" varchar,
  	"sizes_blur_width" numeric,
  	"sizes_blur_height" numeric,
  	"sizes_blur_mime_type" varchar,
  	"sizes_blur_filesize" numeric,
  	"sizes_blur_filename" varchar,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_mobile_url" varchar,
  	"sizes_mobile_width" numeric,
  	"sizes_mobile_height" numeric,
  	"sizes_mobile_mime_type" varchar,
  	"sizes_mobile_filesize" numeric,
  	"sizes_mobile_filename" varchar,
  	"sizes_tablet_url" varchar,
  	"sizes_tablet_width" numeric,
  	"sizes_tablet_height" numeric,
  	"sizes_tablet_mime_type" varchar,
  	"sizes_tablet_filesize" numeric,
  	"sizes_tablet_filename" varchar,
  	"sizes_desktop_url" varchar,
  	"sizes_desktop_width" numeric,
  	"sizes_desktop_height" numeric,
  	"sizes_desktop_mime_type" varchar,
  	"sizes_desktop_filesize" numeric,
  	"sizes_desktop_filename" varchar,
  	"sizes_ultrawide_url" varchar,
  	"sizes_ultrawide_width" numeric,
  	"sizes_ultrawide_height" numeric,
  	"sizes_ultrawide_mime_type" varchar,
  	"sizes_ultrawide_filesize" numeric,
  	"sizes_ultrawide_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "images_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "videos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"published_date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "users_accounts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"provider" varchar NOT NULL,
  	"provider_account_id" varchar NOT NULL,
  	"type" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"email_verified" timestamp(3) with time zone,
  	"name" varchar,
  	"image" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "user_email_providers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "admins" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "exports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"format" "enum_exports_format" DEFAULT 'csv' NOT NULL,
  	"limit" numeric,
  	"sort" varchar,
  	"locale" "enum_exports_locale" DEFAULT 'all',
  	"drafts" "enum_exports_drafts" DEFAULT 'yes',
  	"collection_slug" varchar NOT NULL,
  	"where" jsonb DEFAULT '{}'::jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "exports_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_locales" (
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"authors_id" integer,
  	"tags_id" integer,
  	"files_id" integer,
  	"images_id" integer,
  	"videos_id" integer,
  	"users_id" varchar,
  	"user_email_providers_id" integer,
  	"admins_id" integer,
  	"exports_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" varchar,
  	"user_email_providers_id" integer,
  	"admins_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "nav_header_collapsible_menu_sections_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "undefined_cta_t" DEFAULT 'internal',
  	"link_label" varchar,
  	"link_internal_href_id" integer,
  	"link_external_href" varchar,
  	"link_email_href" varchar,
  	"link_phone_href" varchar,
  	"link_file_href_id" integer,
  	"link_new_tab" boolean,
  	"link_icon_name" "undefined_link_ic",
  	"link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"link_icon_color" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav_header_collapsible_menu_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "nav_header_flat_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "undefined_cta_t" DEFAULT 'internal',
  	"link_label" varchar,
  	"link_internal_href_id" integer,
  	"link_external_href" varchar,
  	"link_email_href" varchar,
  	"link_phone_href" varchar,
  	"link_file_href_id" integer,
  	"link_new_tab" boolean,
  	"link_icon_name" "undefined_link_ic",
  	"link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"link_icon_color" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav_header_icon_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"new_tab" boolean,
  	"icon_name" "iconnavitem_ic",
  	"icon_size" "iconnavitem_iw" DEFAULT '35',
  	"icon_color" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav_footer_footer_items_footer_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "undefined_cta_t" DEFAULT 'internal',
  	"link_label" varchar,
  	"link_internal_href_id" integer,
  	"link_external_href" varchar,
  	"link_email_href" varchar,
  	"link_phone_href" varchar,
  	"link_file_href_id" integer,
  	"link_new_tab" boolean,
  	"link_icon_name" "undefined_link_ic",
  	"link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"link_icon_color" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_logo_id" integer,
  	"header_banner_content" jsonb,
  	"header_banner_background" "enum_nav_header_banner_background",
  	"header_has_cta" boolean,
  	"header_cta_button_cta_link_type" "undefined_cta_t" DEFAULT 'internal',
  	"header_cta_button_cta_link_label" varchar,
  	"header_cta_button_cta_link_internal_href_id" integer,
  	"header_cta_button_cta_link_external_href" varchar,
  	"header_cta_button_cta_link_email_href" varchar,
  	"header_cta_button_cta_link_phone_href" varchar,
  	"header_cta_button_cta_link_file_href_id" integer,
  	"header_cta_button_cta_link_new_tab" boolean,
  	"header_cta_button_cta_link_icon_name" "undefined_link_ic",
  	"header_cta_button_cta_link_icon_size" "undefined_link_iw" DEFAULT '35',
  	"header_cta_button_cta_link_icon_color" varchar,
  	"header_cta_button_cta_variant" "undefined_cta_v" DEFAULT 'solid',
  	"header_cta_button_cta_color" "undefined_cta_tv",
  	"footer_footer_items_footer_logo_id" integer,
  	"footer_footer_items_copyright" jsonb,
  	"footer_footer_items_legal_disclaimer" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "homepagePricingSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepagePricingSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepagePricingSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageTestimonialsSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageTestimonialsSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepageTestimonialsSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageHeaderSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageHeaderSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepageHeaderSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageHeaderSectionsBlock_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepageContactSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageContactSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepageContactSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageFaqSectionsBlock_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepageFaqSectionsBlock_items_locales" (
  	"title" varchar,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepageFaqSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageFaqSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepageFaqSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageFaqSectionsBlock_locales" (
  	"content" jsonb,
  	"top_right_content" jsonb,
  	"bottom_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepageBannersBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageBannersBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepageBannersBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepage_blocks_cta_sections_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepage_blocks_cta_sections_block_variant" DEFAULT '1',
  	"media_position" "enum_homepage_blocks_cta_sections_block_media_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_cta_sections_block_locales" (
  	"content" jsonb,
  	"right_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_feature_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepage_blocks_feature_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepage_blocks_feature_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageherSecB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepageherSecB_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "vrnt" DEFAULT '1',
  	"media_position" "enum_homepageherSecB_media_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepageherSecB_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_homepage_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_homepage_blocks_blog_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar DEFAULT '/',
  	"theme" "enum_homepage_theme",
  	"published_at" timestamp(3) with time zone,
  	"_status" "enum_homepage_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_locales" (
  	"page_title" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_homepagePricingSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepagePricingSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepagePricingSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageTestimonialsSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageTestimonialsSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepageTestimonialsSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageHeaderSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageHeaderSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepageHeaderSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageHeaderSectionsBlock_v_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageContactSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageContactSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepageContactSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageFaqSectionsBlock_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageFaqSectionsBlock_v_items_locales" (
  	"title" varchar,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageFaqSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageFaqSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepageFaqSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageFaqSectionsBlock_v_locales" (
  	"content" jsonb,
  	"top_right_content" jsonb,
  	"bottom_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageBannersBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageBannersBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepageBannersBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepage_v_blocks_cta_sections_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepage_v_blocks_cta_sections_block_variant" DEFAULT '1',
  	"media_position" "enum__homepage_v_blocks_cta_sections_block_media_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_locales" (
  	"content" jsonb,
  	"right_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_feature_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepage_v_blocks_feature_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepage_v_blocks_feature_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageherSecB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepageherSecB_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "vrnt" DEFAULT '1',
  	"media_position" "enum__homepageherSecB_v_media_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepageherSecB_v_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__homepage_v_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__homepage_v_blocks_blog_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_slug" varchar DEFAULT '/',
  	"version_theme" "enum__homepage_v_version_theme",
  	"version_published_at" timestamp(3) with time zone,
  	"version__status" "enum__homepage_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__homepage_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_locales" (
  	"version_page_title" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_homepage_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxPricingSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxPricingSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxPricingSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxTestimonialsSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxTestimonialsSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxTestimonialsSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxHeaderSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxHeaderSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxHeaderSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxHeaderSectionsBlock_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxContactSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxContactSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxContactSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxFaqSectionsBlock_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxFaqSectionsBlock_items_locales" (
  	"title" varchar,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxFaqSectionsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxFaqSectionsBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxFaqSectionsBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxFaqSectionsBlock_locales" (
  	"content" jsonb,
  	"top_right_content" jsonb,
  	"bottom_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxBannersBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxBannersBlock_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blogIdxBannersBlock_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blog_index_blocks_cta_sections_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blog_index_blocks_cta_sections_block_variant" DEFAULT '1',
  	"media_position" "enum_blog_index_blocks_cta_sections_block_media_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_cta_sections_block_locales" (
  	"content" jsonb,
  	"right_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_feature_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blog_index_blocks_feature_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blog_index_blocks_feature_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxherSecB" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blogIdxherSecB_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "vrnt" DEFAULT '1',
  	"media_position" "enum_blogIdxherSecB_media_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogIdxherSecB_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum_blog_index_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum_blog_index_blocks_blog_section_variant" DEFAULT '1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar DEFAULT 'blog',
  	"theme" "enum_blog_index_theme",
  	"published_at" timestamp(3) with time zone,
  	"_status" "enum_blog_index_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_locales" (
  	"page_title" varchar DEFAULT 'Blog Index',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_index_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxPricingSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxPricingSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxPricingSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxTestimonialsSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxTestimonialsSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxTestimonialsSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxHeaderSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxHeaderSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxHeaderSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxHeaderSectionsBlock_v_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxContactSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxContactSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxContactSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_items_locales" (
  	"title" varchar,
  	"description" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxFaqSectionsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxFaqSectionsBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxFaqSectionsBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_locales" (
  	"content" jsonb,
  	"top_right_content" jsonb,
  	"bottom_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxBannersBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxBannersBlock_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blogIdxBannersBlock_v_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blog_index_v_blocks_cta_sections_block_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blog_index_v_blocks_cta_sections_block_variant" DEFAULT '1',
  	"media_position" "enum__blog_index_v_blocks_cta_sections_block_media_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_locales" (
  	"content" jsonb,
  	"right_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_feature_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blog_index_v_blocks_feature_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blog_index_v_blocks_feature_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxherSecB_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blogIdxherSecB_v_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "vrnt" DEFAULT '1',
  	"media_position" "enum__blogIdxherSecB_v_media_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blogIdxherSecB_v_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_blocks_blog_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"wrapper_theme" "enum__blog_index_v_blocks_blog_section_wrapper_theme",
  	"wrapper_content_width" "cw" DEFAULT 'xl',
  	"wrapper_full_width_theme_bg" boolean,
  	"wrapper_padding_xs_padding_top" "t",
  	"wrapper_padding_xs_padding_bottom" "b",
  	"wrapper_padding_md_padding_top" "t",
  	"wrapper_padding_md_padding_bottom" "b",
  	"wrapper_padding_lg_padding_top" "t",
  	"wrapper_padding_lg_padding_bottom" "b",
  	"wrapper_padding_xl_padding_top" "t",
  	"wrapper_padding_xl_padding_bottom" "b",
  	"variant" "enum__blog_index_v_blocks_blog_section_variant" DEFAULT '1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_slug" varchar DEFAULT 'blog',
  	"version_theme" "enum__blog_index_v_version_theme",
  	"version_published_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_index_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__blog_index_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_locales" (
  	"version_page_title" varchar DEFAULT 'Blog Index',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_index_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"videos_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "pagePricingSectionsBlock" ADD CONSTRAINT "pagePricingSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageTestimonialsSectionsBlock" ADD CONSTRAINT "pageTestimonialsSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageHeaderSectionsBlock" ADD CONSTRAINT "pageHeaderSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageHeaderSectionsBlock_locales" ADD CONSTRAINT "pageHeaderSectionsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pageHeaderSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageContactSectionsBlock" ADD CONSTRAINT "pageContactSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageFaqSectionsBlock_items" ADD CONSTRAINT "pageFaqSectionsBlock_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pageFaqSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageFaqSectionsBlock_items_locales" ADD CONSTRAINT "pageFaqSectionsBlock_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pageFaqSectionsBlock_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageFaqSectionsBlock" ADD CONSTRAINT "pageFaqSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageFaqSectionsBlock_locales" ADD CONSTRAINT "pageFaqSectionsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pageFaqSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageBannersBlock" ADD CONSTRAINT "pageBannersBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_sections_block" ADD CONSTRAINT "pages_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta_sections_block_locales" ADD CONSTRAINT "pages_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_feature_section" ADD CONSTRAINT "pages_blocks_feature_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageherSecB" ADD CONSTRAINT "pageherSecB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pageherSecB_locales" ADD CONSTRAINT "pageherSecB_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pageherSecB"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_section" ADD CONSTRAINT "pages_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pagePricingSectionsBlock_v" ADD CONSTRAINT "_pagePricingSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageTestimonialsSectionsBlock_v" ADD CONSTRAINT "_pageTestimonialsSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageHeaderSectionsBlock_v" ADD CONSTRAINT "_pageHeaderSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageHeaderSectionsBlock_v_locales" ADD CONSTRAINT "_pageHeaderSectionsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pageHeaderSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageContactSectionsBlock_v" ADD CONSTRAINT "_pageContactSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageFaqSectionsBlock_v_items" ADD CONSTRAINT "_pageFaqSectionsBlock_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pageFaqSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageFaqSectionsBlock_v_items_locales" ADD CONSTRAINT "_pageFaqSectionsBlock_v_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pageFaqSectionsBlock_v_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageFaqSectionsBlock_v" ADD CONSTRAINT "_pageFaqSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageFaqSectionsBlock_v_locales" ADD CONSTRAINT "_pageFaqSectionsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pageFaqSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageBannersBlock_v" ADD CONSTRAINT "_pageBannersBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_sections_block" ADD CONSTRAINT "_pages_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_pages_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_feature_section" ADD CONSTRAINT "_pages_v_blocks_feature_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageherSecB_v" ADD CONSTRAINT "_pageherSecB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pageherSecB_v_locales" ADD CONSTRAINT "_pageherSecB_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pageherSecB_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_blog_section" ADD CONSTRAINT "_pages_v_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_images_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_ctas" ADD CONSTRAINT "posts_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_content" ADD CONSTRAINT "posts_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_content_locales" ADD CONSTRAINT "posts_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_thumbnail_id_images_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_cover_image_id_images_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_ctas" ADD CONSTRAINT "_posts_v_version_ctas_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_ctas" ADD CONSTRAINT "_posts_v_version_ctas_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_ctas" ADD CONSTRAINT "_posts_v_version_ctas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_content" ADD CONSTRAINT "_posts_v_version_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_content_locales" ADD CONSTRAINT "_posts_v_version_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_version_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_thumbnail_id_images_id_fk" FOREIGN KEY ("version_thumbnail_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_cover_image_id_images_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_images_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "authors" ADD CONSTRAINT "authors_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "authors_locales" ADD CONSTRAINT "authors_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tags_locales" ADD CONSTRAINT "tags_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "images_locales" ADD CONSTRAINT "images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users_accounts" ADD CONSTRAINT "users_accounts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "user_email_providers" ADD CONSTRAINT "user_email_providers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "exports_texts" ADD CONSTRAINT "exports_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."exports"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox_locales" ADD CONSTRAINT "forms_blocks_checkbox_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email_locales" ADD CONSTRAINT "forms_blocks_email_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_email"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number_locales" ADD CONSTRAINT "forms_blocks_number_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_number"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options_locales" ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_options"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_locales" ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text_locales" ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea_locales" ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_textarea"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_authors_fk" FOREIGN KEY ("authors_id") REFERENCES "public"."authors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_files_fk" FOREIGN KEY ("files_id") REFERENCES "public"."files"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_email_providers_fk" FOREIGN KEY ("user_email_providers_id") REFERENCES "public"."user_email_providers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_exports_fk" FOREIGN KEY ("exports_id") REFERENCES "public"."exports"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_user_email_providers_fk" FOREIGN KEY ("user_email_providers_id") REFERENCES "public"."user_email_providers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_collapsible_menu_sections_links" ADD CONSTRAINT "nav_header_collapsible_menu_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_header_collapsible_menu_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_collapsible_menu_sections" ADD CONSTRAINT "nav_header_collapsible_menu_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_flat_menu" ADD CONSTRAINT "nav_header_flat_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_header_icon_items" ADD CONSTRAINT "nav_header_icon_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_link_internal_href_id_pages_id_fk" FOREIGN KEY ("link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_link_file_href_id_files_id_fk" FOREIGN KEY ("link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav_footer_footer_items_footer_menu" ADD CONSTRAINT "nav_footer_footer_items_footer_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav" ADD CONSTRAINT "nav_header_logo_id_images_id_fk" FOREIGN KEY ("header_logo_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav" ADD CONSTRAINT "nav_header_cta_button_cta_link_internal_href_id_pages_id_fk" FOREIGN KEY ("header_cta_button_cta_link_internal_href_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav" ADD CONSTRAINT "nav_header_cta_button_cta_link_file_href_id_files_id_fk" FOREIGN KEY ("header_cta_button_cta_link_file_href_id") REFERENCES "public"."files"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nav" ADD CONSTRAINT "nav_footer_footer_items_footer_logo_id_images_id_fk" FOREIGN KEY ("footer_footer_items_footer_logo_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepagePricingSectionsBlock" ADD CONSTRAINT "homepagePricingSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageTestimonialsSectionsBlock" ADD CONSTRAINT "homepageTestimonialsSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageHeaderSectionsBlock" ADD CONSTRAINT "homepageHeaderSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageHeaderSectionsBlock_locales" ADD CONSTRAINT "homepageHeaderSectionsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepageHeaderSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageContactSectionsBlock" ADD CONSTRAINT "homepageContactSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageFaqSectionsBlock_items" ADD CONSTRAINT "homepageFaqSectionsBlock_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepageFaqSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageFaqSectionsBlock_items_locales" ADD CONSTRAINT "homepageFaqSectionsBlock_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepageFaqSectionsBlock_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageFaqSectionsBlock" ADD CONSTRAINT "homepageFaqSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageFaqSectionsBlock_locales" ADD CONSTRAINT "homepageFaqSectionsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepageFaqSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageBannersBlock" ADD CONSTRAINT "homepageBannersBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_cta_sections_block" ADD CONSTRAINT "homepage_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_cta_sections_block_locales" ADD CONSTRAINT "homepage_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_feature_section" ADD CONSTRAINT "homepage_blocks_feature_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageherSecB" ADD CONSTRAINT "homepageherSecB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepageherSecB_locales" ADD CONSTRAINT "homepageherSecB_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepageherSecB"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_blog_section" ADD CONSTRAINT "homepage_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_locales" ADD CONSTRAINT "homepage_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepagePricingSectionsBlock_v" ADD CONSTRAINT "_homepagePricingSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageTestimonialsSectionsBlock_v" ADD CONSTRAINT "_homepageTestimonialsSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageHeaderSectionsBlock_v" ADD CONSTRAINT "_homepageHeaderSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageHeaderSectionsBlock_v_locales" ADD CONSTRAINT "_homepageHeaderSectionsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepageHeaderSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageContactSectionsBlock_v" ADD CONSTRAINT "_homepageContactSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageFaqSectionsBlock_v_items" ADD CONSTRAINT "_homepageFaqSectionsBlock_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepageFaqSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageFaqSectionsBlock_v_items_locales" ADD CONSTRAINT "_homepageFaqSectionsBlock_v_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepageFaqSectionsBlock_v_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageFaqSectionsBlock_v" ADD CONSTRAINT "_homepageFaqSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageFaqSectionsBlock_v_locales" ADD CONSTRAINT "_homepageFaqSectionsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepageFaqSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageBannersBlock_v" ADD CONSTRAINT "_homepageBannersBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_cta_sections_block" ADD CONSTRAINT "_homepage_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_homepage_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_feature_section" ADD CONSTRAINT "_homepage_v_blocks_feature_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageherSecB_v" ADD CONSTRAINT "_homepageherSecB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepageherSecB_v_locales" ADD CONSTRAINT "_homepageherSecB_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepageherSecB_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_blocks_blog_section" ADD CONSTRAINT "_homepage_v_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_locales" ADD CONSTRAINT "_homepage_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxPricingSectionsBlock" ADD CONSTRAINT "blogIdxPricingSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxTestimonialsSectionsBlock" ADD CONSTRAINT "blogIdxTestimonialsSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxHeaderSectionsBlock" ADD CONSTRAINT "blogIdxHeaderSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxHeaderSectionsBlock_locales" ADD CONSTRAINT "blogIdxHeaderSectionsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogIdxHeaderSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxContactSectionsBlock" ADD CONSTRAINT "blogIdxContactSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxFaqSectionsBlock_items" ADD CONSTRAINT "blogIdxFaqSectionsBlock_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogIdxFaqSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxFaqSectionsBlock_items_locales" ADD CONSTRAINT "blogIdxFaqSectionsBlock_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogIdxFaqSectionsBlock_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxFaqSectionsBlock" ADD CONSTRAINT "blogIdxFaqSectionsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxFaqSectionsBlock_locales" ADD CONSTRAINT "blogIdxFaqSectionsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogIdxFaqSectionsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxBannersBlock" ADD CONSTRAINT "blogIdxBannersBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_cta_sections_block" ADD CONSTRAINT "blog_index_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_cta_sections_block_locales" ADD CONSTRAINT "blog_index_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_feature_section" ADD CONSTRAINT "blog_index_blocks_feature_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxherSecB" ADD CONSTRAINT "blogIdxherSecB_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogIdxherSecB_locales" ADD CONSTRAINT "blogIdxherSecB_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogIdxherSecB"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_blocks_blog_section" ADD CONSTRAINT "blog_index_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_locales" ADD CONSTRAINT "blog_index_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_rels" ADD CONSTRAINT "blog_index_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_index"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_rels" ADD CONSTRAINT "blog_index_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_index_rels" ADD CONSTRAINT "blog_index_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxPricingSectionsBlock_v" ADD CONSTRAINT "_blogIdxPricingSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxTestimonialsSectionsBlock_v" ADD CONSTRAINT "_blogIdxTestimonialsSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxHeaderSectionsBlock_v" ADD CONSTRAINT "_blogIdxHeaderSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxHeaderSectionsBlock_v_locales" ADD CONSTRAINT "_blogIdxHeaderSectionsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogIdxHeaderSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxContactSectionsBlock_v" ADD CONSTRAINT "_blogIdxContactSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxFaqSectionsBlock_v_items" ADD CONSTRAINT "_blogIdxFaqSectionsBlock_v_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogIdxFaqSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxFaqSectionsBlock_v_items_locales" ADD CONSTRAINT "_blogIdxFaqSectionsBlock_v_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogIdxFaqSectionsBlock_v_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxFaqSectionsBlock_v" ADD CONSTRAINT "_blogIdxFaqSectionsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxFaqSectionsBlock_v_locales" ADD CONSTRAINT "_blogIdxFaqSectionsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogIdxFaqSectionsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxBannersBlock_v" ADD CONSTRAINT "_blogIdxBannersBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_cta_sections_block" ADD CONSTRAINT "_blog_index_v_blocks_cta_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_cta_sections_block_locales" ADD CONSTRAINT "_blog_index_v_blocks_cta_sections_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v_blocks_cta_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_feature_section" ADD CONSTRAINT "_blog_index_v_blocks_feature_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxherSecB_v" ADD CONSTRAINT "_blogIdxherSecB_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blogIdxherSecB_v_locales" ADD CONSTRAINT "_blogIdxherSecB_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogIdxherSecB_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_blocks_blog_section" ADD CONSTRAINT "_blog_index_v_blocks_blog_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_locales" ADD CONSTRAINT "_blog_index_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_rels" ADD CONSTRAINT "_blog_index_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_blog_index_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_rels" ADD CONSTRAINT "_blog_index_v_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_index_v_rels" ADD CONSTRAINT "_blog_index_v_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pagePricingSectionsBlock_order_idx" ON "pagePricingSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pagePricingSectionsBlock_parent_id_idx" ON "pagePricingSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pagePricingSectionsBlock_path_idx" ON "pagePricingSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pageTestimonialsSectionsBlock_order_idx" ON "pageTestimonialsSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageTestimonialsSectionsBlock_parent_id_idx" ON "pageTestimonialsSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageTestimonialsSectionsBlock_path_idx" ON "pageTestimonialsSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pageHeaderSectionsBlock_order_idx" ON "pageHeaderSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageHeaderSectionsBlock_parent_id_idx" ON "pageHeaderSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageHeaderSectionsBlock_path_idx" ON "pageHeaderSectionsBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pageHeaderSectionsBlock_locales_locale_parent_id_unique" ON "pageHeaderSectionsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pageContactSectionsBlock_order_idx" ON "pageContactSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageContactSectionsBlock_parent_id_idx" ON "pageContactSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageContactSectionsBlock_path_idx" ON "pageContactSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pageFaqSectionsBlock_items_order_idx" ON "pageFaqSectionsBlock_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageFaqSectionsBlock_items_parent_id_idx" ON "pageFaqSectionsBlock_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pageFaqSectionsBlock_items_locales_locale_parent_id_unique" ON "pageFaqSectionsBlock_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pageFaqSectionsBlock_order_idx" ON "pageFaqSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageFaqSectionsBlock_parent_id_idx" ON "pageFaqSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageFaqSectionsBlock_path_idx" ON "pageFaqSectionsBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pageFaqSectionsBlock_locales_locale_parent_id_unique" ON "pageFaqSectionsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pageBannersBlock_order_idx" ON "pageBannersBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageBannersBlock_parent_id_idx" ON "pageBannersBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageBannersBlock_path_idx" ON "pageBannersBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_order_idx" ON "pages_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_parent_id_idx" ON "pages_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_path_idx" ON "pages_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "pages_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_section_order_idx" ON "pages_blocks_feature_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_section_parent_id_idx" ON "pages_blocks_feature_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_feature_section_path_idx" ON "pages_blocks_feature_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pageherSecB_order_idx" ON "pageherSecB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pageherSecB_parent_id_idx" ON "pageherSecB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pageherSecB_path_idx" ON "pageherSecB" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pageherSecB_locales_locale_parent_id_unique" ON "pageherSecB_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_order_idx" ON "pages_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_parent_id_idx" ON "pages_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_section_path_idx" ON "pages_blocks_blog_section" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_images_id_idx" ON "pages_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_videos_id_idx" ON "pages_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "_pagePricingSectionsBlock_v_order_idx" ON "_pagePricingSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pagePricingSectionsBlock_v_parent_id_idx" ON "_pagePricingSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pagePricingSectionsBlock_v_path_idx" ON "_pagePricingSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pageTestimonialsSectionsBlock_v_order_idx" ON "_pageTestimonialsSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageTestimonialsSectionsBlock_v_parent_id_idx" ON "_pageTestimonialsSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageTestimonialsSectionsBlock_v_path_idx" ON "_pageTestimonialsSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pageHeaderSectionsBlock_v_order_idx" ON "_pageHeaderSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageHeaderSectionsBlock_v_parent_id_idx" ON "_pageHeaderSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageHeaderSectionsBlock_v_path_idx" ON "_pageHeaderSectionsBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pageHeaderSectionsBlock_v_locales_locale_parent_id_unique" ON "_pageHeaderSectionsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageContactSectionsBlock_v_order_idx" ON "_pageContactSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageContactSectionsBlock_v_parent_id_idx" ON "_pageContactSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageContactSectionsBlock_v_path_idx" ON "_pageContactSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_items_order_idx" ON "_pageFaqSectionsBlock_v_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_items_parent_id_idx" ON "_pageFaqSectionsBlock_v_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_items_locales_locale_parent_id_unique" ON "_pageFaqSectionsBlock_v_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_order_idx" ON "_pageFaqSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_parent_id_idx" ON "_pageFaqSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_path_idx" ON "_pageFaqSectionsBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pageFaqSectionsBlock_v_locales_locale_parent_id_unique" ON "_pageFaqSectionsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageBannersBlock_v_order_idx" ON "_pageBannersBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageBannersBlock_v_parent_id_idx" ON "_pageBannersBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageBannersBlock_v_path_idx" ON "_pageBannersBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_order_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_parent_id_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_path_idx" ON "_pages_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_section_order_idx" ON "_pages_v_blocks_feature_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_section_parent_id_idx" ON "_pages_v_blocks_feature_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_feature_section_path_idx" ON "_pages_v_blocks_feature_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pageherSecB_v_order_idx" ON "_pageherSecB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pageherSecB_v_parent_id_idx" ON "_pageherSecB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pageherSecB_v_path_idx" ON "_pageherSecB_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pageherSecB_v_locales_locale_parent_id_unique" ON "_pageherSecB_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_order_idx" ON "_pages_v_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_parent_id_idx" ON "_pages_v_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_section_path_idx" ON "_pages_v_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_images_id_idx" ON "_pages_v_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_videos_id_idx" ON "_pages_v_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "posts_ctas_order_idx" ON "posts_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_ctas_parent_id_idx" ON "posts_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_ctas_cta_link_cta_link_internal_href_idx" ON "posts_ctas" USING btree ("cta_link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "posts_ctas_cta_link_cta_link_file_href_idx" ON "posts_ctas" USING btree ("cta_link_file_href_id");
  CREATE INDEX IF NOT EXISTS "posts_content_order_idx" ON "posts_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_content_parent_id_idx" ON "posts_content" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_content_locales_locale_parent_id_unique" ON "posts_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_thumbnail_idx" ON "posts" USING btree ("thumbnail_id");
  CREATE INDEX IF NOT EXISTS "posts_cover_image_idx" ON "posts" USING btree ("cover_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "posts_rels_authors_id_idx" ON "posts_rels" USING btree ("authors_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_tags_id_idx" ON "posts_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_order_idx" ON "_posts_v_version_ctas" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_parent_id_idx" ON "_posts_v_version_ctas" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_cta_link_cta_link_internal_href_idx" ON "_posts_v_version_ctas" USING btree ("cta_link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_ctas_cta_link_cta_link_file_href_idx" ON "_posts_v_version_ctas" USING btree ("cta_link_file_href_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_content_order_idx" ON "_posts_v_version_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_content_parent_id_idx" ON "_posts_v_version_content" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_posts_v_version_content_locales_locale_parent_id_unique" ON "_posts_v_version_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_thumbnail_idx" ON "_posts_v" USING btree ("version_thumbnail_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_cover_image_idx" ON "_posts_v" USING btree ("version_cover_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_authors_id_idx" ON "_posts_v_rels" USING btree ("authors_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_tags_id_idx" ON "_posts_v_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "authors_image_idx" ON "authors" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "authors_updated_at_idx" ON "authors" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "authors_created_at_idx" ON "authors" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "authors_locales_locale_parent_id_unique" ON "authors_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "tags_updated_at_idx" ON "tags" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "tags_created_at_idx" ON "tags" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "tags_locales_locale_parent_id_unique" ON "tags_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "files_updated_at_idx" ON "files" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "files_created_at_idx" ON "files" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "files_filename_idx" ON "files" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "images_updated_at_idx" ON "images" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "images_created_at_idx" ON "images" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "images_filename_idx" ON "images" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_blur_sizes_blur_filename_idx" ON "images" USING btree ("sizes_blur_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "images" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_mobile_sizes_mobile_filename_idx" ON "images" USING btree ("sizes_mobile_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_tablet_sizes_tablet_filename_idx" ON "images" USING btree ("sizes_tablet_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_desktop_sizes_desktop_filename_idx" ON "images" USING btree ("sizes_desktop_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_ultrawide_sizes_ultrawide_filename_idx" ON "images" USING btree ("sizes_ultrawide_filename");
  CREATE UNIQUE INDEX IF NOT EXISTS "images_locales_locale_parent_id_unique" ON "images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "videos_updated_at_idx" ON "videos" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "videos_created_at_idx" ON "videos" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "videos_filename_idx" ON "videos" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "users_accounts_order_idx" ON "users_accounts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "users_accounts_parent_id_idx" ON "users_accounts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "users_accounts_provider_account_id_idx" ON "users_accounts" USING btree ("provider_account_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "user_email_providers_user_idx" ON "user_email_providers" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "user_email_providers_updated_at_idx" ON "user_email_providers" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "user_email_providers_created_at_idx" ON "user_email_providers" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "user_email_providers_email_idx" ON "user_email_providers" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "admins_updated_at_idx" ON "admins" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "admins_created_at_idx" ON "admins" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "admins_email_idx" ON "admins" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "exports_updated_at_idx" ON "exports" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "exports_created_at_idx" ON "exports" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "exports_filename_idx" ON "exports" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "exports_texts_order_parent_idx" ON "exports_texts" USING btree ("order","parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_checkbox_locales_locale_parent_id_unique" ON "forms_blocks_checkbox_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_email_locales_locale_parent_id_unique" ON "forms_blocks_email_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_number_locales_locale_parent_id_unique" ON "forms_blocks_number_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_options_locales_locale_parent_id_unique" ON "forms_blocks_select_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_locales_locale_parent_id_unique" ON "forms_blocks_select_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_text_locales_locale_parent_id_unique" ON "forms_blocks_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_textarea_locales_locale_parent_id_unique" ON "forms_blocks_textarea_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_emails_locales_locale_parent_id_unique" ON "forms_emails_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_locales_locale_parent_id_unique" ON "forms_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX IF NOT EXISTS "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX IF NOT EXISTS "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX IF NOT EXISTS "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX IF NOT EXISTS "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX IF NOT EXISTS "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX IF NOT EXISTS "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_authors_id_idx" ON "payload_locked_documents_rels" USING btree ("authors_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_files_id_idx" ON "payload_locked_documents_rels" USING btree ("files_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_images_id_idx" ON "payload_locked_documents_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_videos_id_idx" ON "payload_locked_documents_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_user_email_providers_id_idx" ON "payload_locked_documents_rels" USING btree ("user_email_providers_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_admins_id_idx" ON "payload_locked_documents_rels" USING btree ("admins_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_exports_id_idx" ON "payload_locked_documents_rels" USING btree ("exports_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_user_email_providers_id_idx" ON "payload_preferences_rels" USING btree ("user_email_providers_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_admins_id_idx" ON "payload_preferences_rels" USING btree ("admins_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_order_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_parent_id_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_locale_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_link_link_internal_href_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_links_link_link_file_href_idx" ON "nav_header_collapsible_menu_sections_links" USING btree ("link_file_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_order_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_parent_id_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_collapsible_menu_sections_locale_idx" ON "nav_header_collapsible_menu_sections" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_order_idx" ON "nav_header_flat_menu" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_parent_id_idx" ON "nav_header_flat_menu" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_link_link_internal_href_idx" ON "nav_header_flat_menu" USING btree ("link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_flat_menu_link_link_file_href_idx" ON "nav_header_flat_menu" USING btree ("link_file_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_icon_items_order_idx" ON "nav_header_icon_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_header_icon_items_parent_id_idx" ON "nav_header_icon_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_order_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_parent_id_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_link_link_internal_href_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_menu_link_link_file_href_idx" ON "nav_footer_footer_items_footer_menu" USING btree ("link_file_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_header_logo_idx" ON "nav" USING btree ("header_logo_id");
  CREATE INDEX IF NOT EXISTS "nav_header_cta_button_cta_link_header_cta_button_cta_link_internal_href_idx" ON "nav" USING btree ("header_cta_button_cta_link_internal_href_id");
  CREATE INDEX IF NOT EXISTS "nav_header_cta_button_cta_link_header_cta_button_cta_link_file_href_idx" ON "nav" USING btree ("header_cta_button_cta_link_file_href_id");
  CREATE INDEX IF NOT EXISTS "nav_footer_footer_items_footer_footer_items_footer_logo_idx" ON "nav" USING btree ("footer_footer_items_footer_logo_id");
  CREATE INDEX IF NOT EXISTS "homepagePricingSectionsBlock_order_idx" ON "homepagePricingSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepagePricingSectionsBlock_parent_id_idx" ON "homepagePricingSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepagePricingSectionsBlock_path_idx" ON "homepagePricingSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepageTestimonialsSectionsBlock_order_idx" ON "homepageTestimonialsSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageTestimonialsSectionsBlock_parent_id_idx" ON "homepageTestimonialsSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageTestimonialsSectionsBlock_path_idx" ON "homepageTestimonialsSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepageHeaderSectionsBlock_order_idx" ON "homepageHeaderSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageHeaderSectionsBlock_parent_id_idx" ON "homepageHeaderSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageHeaderSectionsBlock_path_idx" ON "homepageHeaderSectionsBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepageHeaderSectionsBlock_locales_locale_parent_id_unique" ON "homepageHeaderSectionsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageContactSectionsBlock_order_idx" ON "homepageContactSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageContactSectionsBlock_parent_id_idx" ON "homepageContactSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageContactSectionsBlock_path_idx" ON "homepageContactSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_items_order_idx" ON "homepageFaqSectionsBlock_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_items_parent_id_idx" ON "homepageFaqSectionsBlock_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_items_locales_locale_parent_id_unique" ON "homepageFaqSectionsBlock_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_order_idx" ON "homepageFaqSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_parent_id_idx" ON "homepageFaqSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_path_idx" ON "homepageFaqSectionsBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepageFaqSectionsBlock_locales_locale_parent_id_unique" ON "homepageFaqSectionsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageBannersBlock_order_idx" ON "homepageBannersBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageBannersBlock_parent_id_idx" ON "homepageBannersBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageBannersBlock_path_idx" ON "homepageBannersBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_order_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_parent_id_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_path_idx" ON "homepage_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "homepage_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_feature_section_order_idx" ON "homepage_blocks_feature_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_feature_section_parent_id_idx" ON "homepage_blocks_feature_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_feature_section_path_idx" ON "homepage_blocks_feature_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepageherSecB_order_idx" ON "homepageherSecB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepageherSecB_parent_id_idx" ON "homepageherSecB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepageherSecB_path_idx" ON "homepageherSecB" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepageherSecB_locales_locale_parent_id_unique" ON "homepageherSecB_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_blog_section_order_idx" ON "homepage_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_blog_section_parent_id_idx" ON "homepage_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_blog_section_path_idx" ON "homepage_blocks_blog_section" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_slug_idx" ON "homepage" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "homepage__status_idx" ON "homepage" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_locales_locale_parent_id_unique" ON "homepage_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_rels_order_idx" ON "homepage_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "homepage_rels_parent_idx" ON "homepage_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_rels_path_idx" ON "homepage_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "homepage_rels_images_id_idx" ON "homepage_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "homepage_rels_videos_id_idx" ON "homepage_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "_homepagePricingSectionsBlock_v_order_idx" ON "_homepagePricingSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepagePricingSectionsBlock_v_parent_id_idx" ON "_homepagePricingSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepagePricingSectionsBlock_v_path_idx" ON "_homepagePricingSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepageTestimonialsSectionsBlock_v_order_idx" ON "_homepageTestimonialsSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageTestimonialsSectionsBlock_v_parent_id_idx" ON "_homepageTestimonialsSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageTestimonialsSectionsBlock_v_path_idx" ON "_homepageTestimonialsSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepageHeaderSectionsBlock_v_order_idx" ON "_homepageHeaderSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageHeaderSectionsBlock_v_parent_id_idx" ON "_homepageHeaderSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageHeaderSectionsBlock_v_path_idx" ON "_homepageHeaderSectionsBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepageHeaderSectionsBlock_v_locales_locale_parent_id_unique" ON "_homepageHeaderSectionsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageContactSectionsBlock_v_order_idx" ON "_homepageContactSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageContactSectionsBlock_v_parent_id_idx" ON "_homepageContactSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageContactSectionsBlock_v_path_idx" ON "_homepageContactSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_items_order_idx" ON "_homepageFaqSectionsBlock_v_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_items_parent_id_idx" ON "_homepageFaqSectionsBlock_v_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_items_locales_locale_parent_id_unique" ON "_homepageFaqSectionsBlock_v_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_order_idx" ON "_homepageFaqSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_parent_id_idx" ON "_homepageFaqSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_path_idx" ON "_homepageFaqSectionsBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepageFaqSectionsBlock_v_locales_locale_parent_id_unique" ON "_homepageFaqSectionsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageBannersBlock_v_order_idx" ON "_homepageBannersBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageBannersBlock_v_parent_id_idx" ON "_homepageBannersBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageBannersBlock_v_path_idx" ON "_homepageBannersBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_order_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_parent_id_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_path_idx" ON "_homepage_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepage_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_homepage_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_feature_section_order_idx" ON "_homepage_v_blocks_feature_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_feature_section_parent_id_idx" ON "_homepage_v_blocks_feature_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_feature_section_path_idx" ON "_homepage_v_blocks_feature_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepageherSecB_v_order_idx" ON "_homepageherSecB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepageherSecB_v_parent_id_idx" ON "_homepageherSecB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepageherSecB_v_path_idx" ON "_homepageherSecB_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepageherSecB_v_locales_locale_parent_id_unique" ON "_homepageherSecB_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_blog_section_order_idx" ON "_homepage_v_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_blog_section_parent_id_idx" ON "_homepage_v_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_blocks_blog_section_path_idx" ON "_homepage_v_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_version_slug_idx" ON "_homepage_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_version__status_idx" ON "_homepage_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_homepage_v_created_at_idx" ON "_homepage_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_homepage_v_updated_at_idx" ON "_homepage_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_homepage_v_snapshot_idx" ON "_homepage_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_homepage_v_published_locale_idx" ON "_homepage_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_homepage_v_latest_idx" ON "_homepage_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_homepage_v_autosave_idx" ON "_homepage_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "_homepage_v_locales_locale_parent_id_unique" ON "_homepage_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_order_idx" ON "_homepage_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_parent_idx" ON "_homepage_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_path_idx" ON "_homepage_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_images_id_idx" ON "_homepage_v_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_rels_videos_id_idx" ON "_homepage_v_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "blogIdxPricingSectionsBlock_order_idx" ON "blogIdxPricingSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxPricingSectionsBlock_parent_id_idx" ON "blogIdxPricingSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxPricingSectionsBlock_path_idx" ON "blogIdxPricingSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogIdxTestimonialsSectionsBlock_order_idx" ON "blogIdxTestimonialsSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxTestimonialsSectionsBlock_parent_id_idx" ON "blogIdxTestimonialsSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxTestimonialsSectionsBlock_path_idx" ON "blogIdxTestimonialsSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogIdxHeaderSectionsBlock_order_idx" ON "blogIdxHeaderSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxHeaderSectionsBlock_parent_id_idx" ON "blogIdxHeaderSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxHeaderSectionsBlock_path_idx" ON "blogIdxHeaderSectionsBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blogIdxHeaderSectionsBlock_locales_locale_parent_id_unique" ON "blogIdxHeaderSectionsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxContactSectionsBlock_order_idx" ON "blogIdxContactSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxContactSectionsBlock_parent_id_idx" ON "blogIdxContactSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxContactSectionsBlock_path_idx" ON "blogIdxContactSectionsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_items_order_idx" ON "blogIdxFaqSectionsBlock_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_items_parent_id_idx" ON "blogIdxFaqSectionsBlock_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_items_locales_locale_parent_id_unique" ON "blogIdxFaqSectionsBlock_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_order_idx" ON "blogIdxFaqSectionsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_parent_id_idx" ON "blogIdxFaqSectionsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_path_idx" ON "blogIdxFaqSectionsBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blogIdxFaqSectionsBlock_locales_locale_parent_id_unique" ON "blogIdxFaqSectionsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxBannersBlock_order_idx" ON "blogIdxBannersBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxBannersBlock_parent_id_idx" ON "blogIdxBannersBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxBannersBlock_path_idx" ON "blogIdxBannersBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_order_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_parent_id_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_path_idx" ON "blog_index_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "blog_index_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_feature_section_order_idx" ON "blog_index_blocks_feature_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_feature_section_parent_id_idx" ON "blog_index_blocks_feature_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_feature_section_path_idx" ON "blog_index_blocks_feature_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogIdxherSecB_order_idx" ON "blogIdxherSecB" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogIdxherSecB_parent_id_idx" ON "blogIdxherSecB" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogIdxherSecB_path_idx" ON "blogIdxherSecB" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blogIdxherSecB_locales_locale_parent_id_unique" ON "blogIdxherSecB_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_blog_section_order_idx" ON "blog_index_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_blog_section_parent_id_idx" ON "blog_index_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_blocks_blog_section_path_idx" ON "blog_index_blocks_blog_section" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_slug_idx" ON "blog_index" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_index__status_idx" ON "blog_index" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_index_locales_locale_parent_id_unique" ON "blog_index_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_order_idx" ON "blog_index_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_parent_idx" ON "blog_index_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_path_idx" ON "blog_index_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_images_id_idx" ON "blog_index_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "blog_index_rels_videos_id_idx" ON "blog_index_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxPricingSectionsBlock_v_order_idx" ON "_blogIdxPricingSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxPricingSectionsBlock_v_parent_id_idx" ON "_blogIdxPricingSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxPricingSectionsBlock_v_path_idx" ON "_blogIdxPricingSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blogIdxTestimonialsSectionsBlock_v_order_idx" ON "_blogIdxTestimonialsSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxTestimonialsSectionsBlock_v_parent_id_idx" ON "_blogIdxTestimonialsSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxTestimonialsSectionsBlock_v_path_idx" ON "_blogIdxTestimonialsSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blogIdxHeaderSectionsBlock_v_order_idx" ON "_blogIdxHeaderSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxHeaderSectionsBlock_v_parent_id_idx" ON "_blogIdxHeaderSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxHeaderSectionsBlock_v_path_idx" ON "_blogIdxHeaderSectionsBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blogIdxHeaderSectionsBlock_v_locales_locale_parent_id_unique" ON "_blogIdxHeaderSectionsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxContactSectionsBlock_v_order_idx" ON "_blogIdxContactSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxContactSectionsBlock_v_parent_id_idx" ON "_blogIdxContactSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxContactSectionsBlock_v_path_idx" ON "_blogIdxContactSectionsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_items_order_idx" ON "_blogIdxFaqSectionsBlock_v_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_items_parent_id_idx" ON "_blogIdxFaqSectionsBlock_v_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_items_locales_locale_parent_id_unique" ON "_blogIdxFaqSectionsBlock_v_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_order_idx" ON "_blogIdxFaqSectionsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_parent_id_idx" ON "_blogIdxFaqSectionsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_path_idx" ON "_blogIdxFaqSectionsBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blogIdxFaqSectionsBlock_v_locales_locale_parent_id_unique" ON "_blogIdxFaqSectionsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxBannersBlock_v_order_idx" ON "_blogIdxBannersBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxBannersBlock_v_parent_id_idx" ON "_blogIdxBannersBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxBannersBlock_v_path_idx" ON "_blogIdxBannersBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_order_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_parent_id_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_path_idx" ON "_blog_index_v_blocks_cta_sections_block" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blog_index_v_blocks_cta_sections_block_locales_locale_parent_id_unique" ON "_blog_index_v_blocks_cta_sections_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_feature_section_order_idx" ON "_blog_index_v_blocks_feature_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_feature_section_parent_id_idx" ON "_blog_index_v_blocks_feature_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_feature_section_path_idx" ON "_blog_index_v_blocks_feature_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blogIdxherSecB_v_order_idx" ON "_blogIdxherSecB_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blogIdxherSecB_v_parent_id_idx" ON "_blogIdxherSecB_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blogIdxherSecB_v_path_idx" ON "_blogIdxherSecB_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blogIdxherSecB_v_locales_locale_parent_id_unique" ON "_blogIdxherSecB_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_blog_section_order_idx" ON "_blog_index_v_blocks_blog_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_blog_section_parent_id_idx" ON "_blog_index_v_blocks_blog_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_blocks_blog_section_path_idx" ON "_blog_index_v_blocks_blog_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_version_version_slug_idx" ON "_blog_index_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_version_version__status_idx" ON "_blog_index_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_created_at_idx" ON "_blog_index_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_updated_at_idx" ON "_blog_index_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_snapshot_idx" ON "_blog_index_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_published_locale_idx" ON "_blog_index_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_latest_idx" ON "_blog_index_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_autosave_idx" ON "_blog_index_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "_blog_index_v_locales_locale_parent_id_unique" ON "_blog_index_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_order_idx" ON "_blog_index_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_parent_idx" ON "_blog_index_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_path_idx" ON "_blog_index_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_images_id_idx" ON "_blog_index_v_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "_blog_index_v_rels_videos_id_idx" ON "_blog_index_v_rels" USING btree ("videos_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pagePricingSectionsBlock" CASCADE;
  DROP TABLE "pageTestimonialsSectionsBlock" CASCADE;
  DROP TABLE "pageHeaderSectionsBlock" CASCADE;
  DROP TABLE "pageHeaderSectionsBlock_locales" CASCADE;
  DROP TABLE "pageContactSectionsBlock" CASCADE;
  DROP TABLE "pageFaqSectionsBlock_items" CASCADE;
  DROP TABLE "pageFaqSectionsBlock_items_locales" CASCADE;
  DROP TABLE "pageFaqSectionsBlock" CASCADE;
  DROP TABLE "pageFaqSectionsBlock_locales" CASCADE;
  DROP TABLE "pageBannersBlock" CASCADE;
  DROP TABLE "pages_blocks_cta_sections_block" CASCADE;
  DROP TABLE "pages_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_section" CASCADE;
  DROP TABLE "pageherSecB" CASCADE;
  DROP TABLE "pageherSecB_locales" CASCADE;
  DROP TABLE "pages_blocks_blog_section" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pagePricingSectionsBlock_v" CASCADE;
  DROP TABLE "_pageTestimonialsSectionsBlock_v" CASCADE;
  DROP TABLE "_pageHeaderSectionsBlock_v" CASCADE;
  DROP TABLE "_pageHeaderSectionsBlock_v_locales" CASCADE;
  DROP TABLE "_pageContactSectionsBlock_v" CASCADE;
  DROP TABLE "_pageFaqSectionsBlock_v_items" CASCADE;
  DROP TABLE "_pageFaqSectionsBlock_v_items_locales" CASCADE;
  DROP TABLE "_pageFaqSectionsBlock_v" CASCADE;
  DROP TABLE "_pageFaqSectionsBlock_v_locales" CASCADE;
  DROP TABLE "_pageBannersBlock_v" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_section" CASCADE;
  DROP TABLE "_pageherSecB_v" CASCADE;
  DROP TABLE "_pageherSecB_v_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_section" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_ctas" CASCADE;
  DROP TABLE "posts_content" CASCADE;
  DROP TABLE "posts_content_locales" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_ctas" CASCADE;
  DROP TABLE "_posts_v_version_content" CASCADE;
  DROP TABLE "_posts_v_version_content_locales" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "authors" CASCADE;
  DROP TABLE "authors_locales" CASCADE;
  DROP TABLE "tags" CASCADE;
  DROP TABLE "tags_locales" CASCADE;
  DROP TABLE "files" CASCADE;
  DROP TABLE "images" CASCADE;
  DROP TABLE "images_locales" CASCADE;
  DROP TABLE "videos" CASCADE;
  DROP TABLE "users_accounts" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "user_email_providers" CASCADE;
  DROP TABLE "admins" CASCADE;
  DROP TABLE "exports" CASCADE;
  DROP TABLE "exports_texts" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_checkbox_locales" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_email_locales" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_number_locales" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select_options_locales" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_select_locales" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_text_locales" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_blocks_textarea_locales" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "nav_header_collapsible_menu_sections_links" CASCADE;
  DROP TABLE "nav_header_collapsible_menu_sections" CASCADE;
  DROP TABLE "nav_header_flat_menu" CASCADE;
  DROP TABLE "nav_header_icon_items" CASCADE;
  DROP TABLE "nav_footer_footer_items_footer_menu" CASCADE;
  DROP TABLE "nav" CASCADE;
  DROP TABLE "homepagePricingSectionsBlock" CASCADE;
  DROP TABLE "homepageTestimonialsSectionsBlock" CASCADE;
  DROP TABLE "homepageHeaderSectionsBlock" CASCADE;
  DROP TABLE "homepageHeaderSectionsBlock_locales" CASCADE;
  DROP TABLE "homepageContactSectionsBlock" CASCADE;
  DROP TABLE "homepageFaqSectionsBlock_items" CASCADE;
  DROP TABLE "homepageFaqSectionsBlock_items_locales" CASCADE;
  DROP TABLE "homepageFaqSectionsBlock" CASCADE;
  DROP TABLE "homepageFaqSectionsBlock_locales" CASCADE;
  DROP TABLE "homepageBannersBlock" CASCADE;
  DROP TABLE "homepage_blocks_cta_sections_block" CASCADE;
  DROP TABLE "homepage_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "homepage_blocks_feature_section" CASCADE;
  DROP TABLE "homepageherSecB" CASCADE;
  DROP TABLE "homepageherSecB_locales" CASCADE;
  DROP TABLE "homepage_blocks_blog_section" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "homepage_locales" CASCADE;
  DROP TABLE "homepage_rels" CASCADE;
  DROP TABLE "_homepagePricingSectionsBlock_v" CASCADE;
  DROP TABLE "_homepageTestimonialsSectionsBlock_v" CASCADE;
  DROP TABLE "_homepageHeaderSectionsBlock_v" CASCADE;
  DROP TABLE "_homepageHeaderSectionsBlock_v_locales" CASCADE;
  DROP TABLE "_homepageContactSectionsBlock_v" CASCADE;
  DROP TABLE "_homepageFaqSectionsBlock_v_items" CASCADE;
  DROP TABLE "_homepageFaqSectionsBlock_v_items_locales" CASCADE;
  DROP TABLE "_homepageFaqSectionsBlock_v" CASCADE;
  DROP TABLE "_homepageFaqSectionsBlock_v_locales" CASCADE;
  DROP TABLE "_homepageBannersBlock_v" CASCADE;
  DROP TABLE "_homepage_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_homepage_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_homepage_v_blocks_feature_section" CASCADE;
  DROP TABLE "_homepageherSecB_v" CASCADE;
  DROP TABLE "_homepageherSecB_v_locales" CASCADE;
  DROP TABLE "_homepage_v_blocks_blog_section" CASCADE;
  DROP TABLE "_homepage_v" CASCADE;
  DROP TABLE "_homepage_v_locales" CASCADE;
  DROP TABLE "_homepage_v_rels" CASCADE;
  DROP TABLE "blogIdxPricingSectionsBlock" CASCADE;
  DROP TABLE "blogIdxTestimonialsSectionsBlock" CASCADE;
  DROP TABLE "blogIdxHeaderSectionsBlock" CASCADE;
  DROP TABLE "blogIdxHeaderSectionsBlock_locales" CASCADE;
  DROP TABLE "blogIdxContactSectionsBlock" CASCADE;
  DROP TABLE "blogIdxFaqSectionsBlock_items" CASCADE;
  DROP TABLE "blogIdxFaqSectionsBlock_items_locales" CASCADE;
  DROP TABLE "blogIdxFaqSectionsBlock" CASCADE;
  DROP TABLE "blogIdxFaqSectionsBlock_locales" CASCADE;
  DROP TABLE "blogIdxBannersBlock" CASCADE;
  DROP TABLE "blog_index_blocks_cta_sections_block" CASCADE;
  DROP TABLE "blog_index_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "blog_index_blocks_feature_section" CASCADE;
  DROP TABLE "blogIdxherSecB" CASCADE;
  DROP TABLE "blogIdxherSecB_locales" CASCADE;
  DROP TABLE "blog_index_blocks_blog_section" CASCADE;
  DROP TABLE "blog_index" CASCADE;
  DROP TABLE "blog_index_locales" CASCADE;
  DROP TABLE "blog_index_rels" CASCADE;
  DROP TABLE "_blogIdxPricingSectionsBlock_v" CASCADE;
  DROP TABLE "_blogIdxTestimonialsSectionsBlock_v" CASCADE;
  DROP TABLE "_blogIdxHeaderSectionsBlock_v" CASCADE;
  DROP TABLE "_blogIdxHeaderSectionsBlock_v_locales" CASCADE;
  DROP TABLE "_blogIdxContactSectionsBlock_v" CASCADE;
  DROP TABLE "_blogIdxFaqSectionsBlock_v_items" CASCADE;
  DROP TABLE "_blogIdxFaqSectionsBlock_v_items_locales" CASCADE;
  DROP TABLE "_blogIdxFaqSectionsBlock_v" CASCADE;
  DROP TABLE "_blogIdxFaqSectionsBlock_v_locales" CASCADE;
  DROP TABLE "_blogIdxBannersBlock_v" CASCADE;
  DROP TABLE "_blog_index_v_blocks_cta_sections_block" CASCADE;
  DROP TABLE "_blog_index_v_blocks_cta_sections_block_locales" CASCADE;
  DROP TABLE "_blog_index_v_blocks_feature_section" CASCADE;
  DROP TABLE "_blogIdxherSecB_v" CASCADE;
  DROP TABLE "_blogIdxherSecB_v_locales" CASCADE;
  DROP TABLE "_blog_index_v_blocks_blog_section" CASCADE;
  DROP TABLE "_blog_index_v" CASCADE;
  DROP TABLE "_blog_index_v_locales" CASCADE;
  DROP TABLE "_blog_index_v_rels" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pagePricingSectionsBlock_wrapper_theme";
  DROP TYPE "public"."cw";
  DROP TYPE "public"."t";
  DROP TYPE "public"."b";
  DROP TYPE "public"."enum_pagePricingSectionsBlock_variant";
  DROP TYPE "public"."enum_pageTestimonialsSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_pageTestimonialsSectionsBlock_variant";
  DROP TYPE "public"."enum_pageHeaderSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_pageHeaderSectionsBlock_variant";
  DROP TYPE "public"."enum_pageContactSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_pageContactSectionsBlock_variant";
  DROP TYPE "public"."enum_pageFaqSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_pageFaqSectionsBlock_variant";
  DROP TYPE "public"."enum_pageBannersBlock_wrapper_theme";
  DROP TYPE "public"."enum_pageBannersBlock_variant";
  DROP TYPE "public"."enum_pages_blocks_cta_sections_block_wrapper_theme";
  DROP TYPE "public"."enum_pages_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum_pages_blocks_cta_sections_block_media_position";
  DROP TYPE "public"."enum_pages_blocks_feature_section_wrapper_theme";
  DROP TYPE "public"."enum_pages_blocks_feature_section_variant";
  DROP TYPE "public"."enum_pageherSecB_wrapper_theme";
  DROP TYPE "public"."vrnt";
  DROP TYPE "public"."enum_pageherSecB_media_position";
  DROP TYPE "public"."enum_pages_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum_pages_blocks_blog_section_variant";
  DROP TYPE "public"."enum_pages_theme";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pagePricingSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pagePricingSectionsBlock_v_variant";
  DROP TYPE "public"."enum__pageTestimonialsSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pageTestimonialsSectionsBlock_v_variant";
  DROP TYPE "public"."enum__pageHeaderSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pageHeaderSectionsBlock_v_variant";
  DROP TYPE "public"."enum__pageContactSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pageContactSectionsBlock_v_variant";
  DROP TYPE "public"."enum__pageFaqSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pageFaqSectionsBlock_v_variant";
  DROP TYPE "public"."enum__pageBannersBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__pageBannersBlock_v_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_sections_block_wrapper_theme";
  DROP TYPE "public"."enum__pages_v_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_sections_block_media_position";
  DROP TYPE "public"."enum__pages_v_blocks_feature_section_wrapper_theme";
  DROP TYPE "public"."enum__pages_v_blocks_feature_section_variant";
  DROP TYPE "public"."enum__pageherSecB_v_wrapper_theme";
  DROP TYPE "public"."enum__pageherSecB_v_media_position";
  DROP TYPE "public"."enum__pages_v_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum__pages_v_blocks_blog_section_variant";
  DROP TYPE "public"."enum__pages_v_version_theme";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."undefined_cta_t";
  DROP TYPE "public"."undefined_link_ic";
  DROP TYPE "public"."undefined_link_iw";
  DROP TYPE "public"."card_cta_v";
  DROP TYPE "public"."card_cta_tv";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_exports_format";
  DROP TYPE "public"."enum_exports_locale";
  DROP TYPE "public"."enum_exports_drafts";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."iconnavitem_ic";
  DROP TYPE "public"."iconnavitem_iw";
  DROP TYPE "public"."enum_nav_header_banner_background";
  DROP TYPE "public"."undefined_cta_v";
  DROP TYPE "public"."undefined_cta_tv";
  DROP TYPE "public"."enum_homepagePricingSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepagePricingSectionsBlock_variant";
  DROP TYPE "public"."enum_homepageTestimonialsSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepageTestimonialsSectionsBlock_variant";
  DROP TYPE "public"."enum_homepageHeaderSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepageHeaderSectionsBlock_variant";
  DROP TYPE "public"."enum_homepageContactSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepageContactSectionsBlock_variant";
  DROP TYPE "public"."enum_homepageFaqSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepageFaqSectionsBlock_variant";
  DROP TYPE "public"."enum_homepageBannersBlock_wrapper_theme";
  DROP TYPE "public"."enum_homepageBannersBlock_variant";
  DROP TYPE "public"."enum_homepage_blocks_cta_sections_block_wrapper_theme";
  DROP TYPE "public"."enum_homepage_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum_homepage_blocks_cta_sections_block_media_position";
  DROP TYPE "public"."enum_homepage_blocks_feature_section_wrapper_theme";
  DROP TYPE "public"."enum_homepage_blocks_feature_section_variant";
  DROP TYPE "public"."enum_homepageherSecB_wrapper_theme";
  DROP TYPE "public"."enum_homepageherSecB_media_position";
  DROP TYPE "public"."enum_homepage_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum_homepage_blocks_blog_section_variant";
  DROP TYPE "public"."enum_homepage_theme";
  DROP TYPE "public"."enum_homepage_status";
  DROP TYPE "public"."enum__homepagePricingSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepagePricingSectionsBlock_v_variant";
  DROP TYPE "public"."enum__homepageTestimonialsSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageTestimonialsSectionsBlock_v_variant";
  DROP TYPE "public"."enum__homepageHeaderSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageHeaderSectionsBlock_v_variant";
  DROP TYPE "public"."enum__homepageContactSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageContactSectionsBlock_v_variant";
  DROP TYPE "public"."enum__homepageFaqSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageFaqSectionsBlock_v_variant";
  DROP TYPE "public"."enum__homepageBannersBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageBannersBlock_v_variant";
  DROP TYPE "public"."enum__homepage_v_blocks_cta_sections_block_wrapper_theme";
  DROP TYPE "public"."enum__homepage_v_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__homepage_v_blocks_cta_sections_block_media_position";
  DROP TYPE "public"."enum__homepage_v_blocks_feature_section_wrapper_theme";
  DROP TYPE "public"."enum__homepage_v_blocks_feature_section_variant";
  DROP TYPE "public"."enum__homepageherSecB_v_wrapper_theme";
  DROP TYPE "public"."enum__homepageherSecB_v_media_position";
  DROP TYPE "public"."enum__homepage_v_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum__homepage_v_blocks_blog_section_variant";
  DROP TYPE "public"."enum__homepage_v_version_theme";
  DROP TYPE "public"."enum__homepage_v_version_status";
  DROP TYPE "public"."enum__homepage_v_published_locale";
  DROP TYPE "public"."enum_blogIdxPricingSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxPricingSectionsBlock_variant";
  DROP TYPE "public"."enum_blogIdxTestimonialsSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxTestimonialsSectionsBlock_variant";
  DROP TYPE "public"."enum_blogIdxHeaderSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxHeaderSectionsBlock_variant";
  DROP TYPE "public"."enum_blogIdxContactSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxContactSectionsBlock_variant";
  DROP TYPE "public"."enum_blogIdxFaqSectionsBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxFaqSectionsBlock_variant";
  DROP TYPE "public"."enum_blogIdxBannersBlock_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxBannersBlock_variant";
  DROP TYPE "public"."enum_blog_index_blocks_cta_sections_block_wrapper_theme";
  DROP TYPE "public"."enum_blog_index_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum_blog_index_blocks_cta_sections_block_media_position";
  DROP TYPE "public"."enum_blog_index_blocks_feature_section_wrapper_theme";
  DROP TYPE "public"."enum_blog_index_blocks_feature_section_variant";
  DROP TYPE "public"."enum_blogIdxherSecB_wrapper_theme";
  DROP TYPE "public"."enum_blogIdxherSecB_media_position";
  DROP TYPE "public"."enum_blog_index_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum_blog_index_blocks_blog_section_variant";
  DROP TYPE "public"."enum_blog_index_theme";
  DROP TYPE "public"."enum_blog_index_status";
  DROP TYPE "public"."enum__blogIdxPricingSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxPricingSectionsBlock_v_variant";
  DROP TYPE "public"."enum__blogIdxTestimonialsSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxTestimonialsSectionsBlock_v_variant";
  DROP TYPE "public"."enum__blogIdxHeaderSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxHeaderSectionsBlock_v_variant";
  DROP TYPE "public"."enum__blogIdxContactSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxContactSectionsBlock_v_variant";
  DROP TYPE "public"."enum__blogIdxFaqSectionsBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxFaqSectionsBlock_v_variant";
  DROP TYPE "public"."enum__blogIdxBannersBlock_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxBannersBlock_v_variant";
  DROP TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_wrapper_theme";
  DROP TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_variant";
  DROP TYPE "public"."enum__blog_index_v_blocks_cta_sections_block_media_position";
  DROP TYPE "public"."enum__blog_index_v_blocks_feature_section_wrapper_theme";
  DROP TYPE "public"."enum__blog_index_v_blocks_feature_section_variant";
  DROP TYPE "public"."enum__blogIdxherSecB_v_wrapper_theme";
  DROP TYPE "public"."enum__blogIdxherSecB_v_media_position";
  DROP TYPE "public"."enum__blog_index_v_blocks_blog_section_wrapper_theme";
  DROP TYPE "public"."enum__blog_index_v_blocks_blog_section_variant";
  DROP TYPE "public"."enum__blog_index_v_version_theme";
  DROP TYPE "public"."enum__blog_index_v_version_status";
  DROP TYPE "public"."enum__blog_index_v_published_locale";`)
}
