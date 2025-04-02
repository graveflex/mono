// InsertBlockConfigImports
import BannersBlock from '@mono/web/blocks/BannersBlock/BannersBlock.config';
import BlogSectionBlock from '@mono/web/blocks/BlogSection/BlogSection.config';
import ContactSectionsBlock from '@mono/web/blocks/ContactSectionsBlock/ContactSectionsBlock.config';
import CtaSectionsBlock from '@mono/web/blocks/CtaSectionsBlock/CtaSectionsBlock.config';
import FaqSectionsBlock from '@mono/web/blocks/FaqSectionsBlock/FaqSectionsBlock.config';
import FeatureSection from '@mono/web/blocks/FeatureSection/FeatureSection.config';
import HeaderSectionsBlock from '@mono/web/blocks/HeaderSectionsBlock/HeaderSectionsBlock.config';
import HeroSectionsBlock from '@mono/web/blocks/HeroSectionsBlock/HeroSectionsBlock.config';
import PricingSectionsBlock from '@mono/web/blocks/PricingSectionsBlock/PricingSectionsBlock.config';
import TestimonialsSectionsBlock from '@mono/web/blocks/TestimonialsSectionsBlock/TestimonialsSectionsBlock.config';

export const allBlocks = (prefix: string) => [
  // InsertBlockConfigFields
  PricingSectionsBlock(prefix),
  TestimonialsSectionsBlock(prefix),
  HeaderSectionsBlock(prefix),
  ContactSectionsBlock(prefix),
  FaqSectionsBlock(prefix),
  BannersBlock(prefix),
  CtaSectionsBlock,
  FeatureSection,
  HeroSectionsBlock(prefix),
  BlogSectionBlock
];
