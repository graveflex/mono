import type { CtaSectionsBlockT } from '@mono/types/payload-types';
import { cva } from 'class-variance-authority';
import type React from 'react';
import styles from './Wrapper.module.css';

export type BlockWrapperProps = CtaSectionsBlockT['wrapper'] &
  React.HTMLAttributes<HTMLDivElement>;

const container = cva([styles.container], {
  variants: {
    gutter: {
      none: 'px-0',
      default: 'px-4'
    },
    theme: {
      dark: 'dark',
      light: 'light',
      _: ''
    }
  },
  defaultVariants: {
    gutter: 'default',
    theme: '_'
  }
});

const content = cva([styles.content], {
  variants: {
    width: {
      full: 'w-full',
      xs: 'w-full md:max-w-lg',
      sm: 'w-full md:max-w-xl',
      md: 'w-full md:max-w-3xl',
      lg: 'w-full md:max-w-5xl',
      xl: 'w-full md:max-w-6xl',
      xxl: 'w-full md:max-w-7xl'
    }
  },
  defaultVariants: {
    width: 'lg'
  }
});

const getPaddingClasses = (
  utilClass: string,
  prop: 'paddingTop' | 'paddingBottom',
  props: BlockWrapperProps
) => {
  const padding = [props.paddingXs?.[prop] ?? `${utilClass}-4`] as string[];
  if (props.paddingMd?.[prop]) {
    padding.push(`md:${props.paddingMd?.[prop]}`);
  }
  if (props.paddingLg?.[prop]) {
    padding.push(`lg:${props.paddingLg?.[prop]}`);
  }
  if (props.paddingXl?.[prop]) {
    padding.push(`xl:${props.paddingXl?.[prop]}`);
  }

  return padding;
};

const getContainerClasses = (props: BlockWrapperProps) => {
  return cva([
    ...getPaddingClasses('pt', 'paddingTop', props),
    ...getPaddingClasses('pb', 'paddingBottom', props),
    props?.fullWidthThemeBg ? 'bg-background' : '',
    props.className
  ])({});
};

export type WrapperProps = React.ComponentProps<'section'> & BlockWrapperProps;

function Wrapper({ children, ...props }: WrapperProps) {
  const containerClasses = `${container({ gutter: 'default', theme: props.theme ?? '_' })} ${getContainerClasses(props)}`;
  const contentClasses = content({ width: props.contentWidth });
  return (
    <section className={containerClasses}>
      <div className={contentClasses}>{children}</div>
    </section>
  );
}

export default Wrapper;
