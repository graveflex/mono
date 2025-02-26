import type { Image as PayloadImageProps } from '@mono/types/payload-types';
import Image, { type ImageProps, getImageProps } from 'next/image';
import type React from 'react';

type Dimensions = {
  height?: number;
  width?: number;
};

const sizeMapping = {
  ultrawide: 'xxl',
  desktop: 'lg',
  tablet: 'md',
  mobile: 'sm',
  thumbnail: 'xxs'
};

export type SrcSets = Record<
  keyof typeof sizeMapping,
  {
    bp: string;
    srcSet?: string;
    sizes?: string;
  }
>;

/* If there is no height or width then the image will fill the container */
const isFill = ({ width, height }: Dimensions): boolean => {
  if (width === undefined && height === undefined) {
    return true;
  }
  return false;
};

const getSrcSets = (
  sizes: PayloadImageProps['sizes'],
  alt: string,
  fillSizes?: string
): SrcSets => {
  const srcSets = Object.keys(sizeMapping).reduce(
    (memo, screenSize): SrcSets => {
      const sizeKey = screenSize as keyof typeof sizeMapping;

      const image = sizes?.[sizeKey];
      if (image && image.url) {
        memo[sizeKey] = {
          bp: sizeMapping[sizeKey],
          sizes: fillSizes,
          srcSet: getImageProps({
            alt,
            src: image.url,
            sizes: fillSizes,
            width: image.width || undefined,
            height: image.height || undefined
          }).props.srcSet
        };
      }

      return memo;
    },
    {} as SrcSets
  );

  return srcSets;
};

export interface ResponsivePayloadWrapperProps extends Partial<ImageProps> {
  image?: number | PayloadImageProps | null | undefined;
  mimeType?: string | null | undefined;
  $rounded?: boolean;
  sizes: string;
  imgClasses?: string;
}

interface SourceProps {
  srcSet?: string;
  sizes?: string;
}

function Source({ srcSet, sizes }: SourceProps) {
  if (!srcSet) {
    return null;
  }

  const minWidth = 320;

  return (
    <source
      media={`(min-width: ${minWidth}px)`}
      srcSet={srcSet}
      sizes={sizes}
    />
  );
}

function ResponsivePayloadImage({
  className,
  fill,
  image,
  imgClasses,
  ...props
}: ResponsivePayloadWrapperProps) {
  if (typeof image === 'number' || !image) {
    return null;
  }

  const { alt, url, height, sizes, width, imageProps } = image;

  const cmsPriority = imageProps?.priority ? 'eager' : undefined;

  const priority = props.loading ?? cmsPriority ?? 'lazy';

  if (!url) {
    return null;
  }

  const { mobile, tablet, desktop, ultrawide } = sizes ?? {};
  let { thumbnail } = sizes ?? {};

  if (!thumbnail) {
    thumbnail = { url, width, height };
  }

  /* Nextjs Image properties. There cannot be a height and width if fill is true */
  fill = fill ?? isFill({ height, width } as Dimensions);

  const fillSizes =
    props.sizes ??
    [
      `(min-width: 2048px) ${ultrawide?.width}px`,
      `(min-width: 1024px) ${desktop?.width}px`,
      `(min-width: 768px) ${tablet?.width}px`,
      `${mobile?.width}px`
    ].join(', ');

  const srcSets = getSrcSets(sizes, alt ?? '', fillSizes);

  return (
    <picture className={className}>
      <Source {...srcSets.ultrawide} />
      <Source {...srcSets.desktop} />
      <Source {...srcSets.tablet} />
      <Source {...srcSets.mobile} />
      <Image
        loading={priority}
        width={width || undefined}
        height={height || undefined}
        {...props}
        src={url}
        alt={props.alt ?? ''}
        className={imgClasses}
      />
    </picture>
  );
}

export default ResponsivePayloadImage;
