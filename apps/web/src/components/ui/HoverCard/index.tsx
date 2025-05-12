'use client';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import type * as React from 'react';

import { cn } from '@mono/web/lib/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = ({
  ref,
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & {
  ref: React.RefObject<React.ElementRef<typeof HoverCardPrimitive.Content>>;
}) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-50 w-64 rounded-md border bg-popover p-2 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

const HoverCardArrow = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.HoverCardArrow> & {
  ref: React.RefObject<
    React.ElementRef<typeof HoverCardPrimitive.HoverCardArrow>
  >;
}) => (
  <HoverCardPrimitive.HoverCardArrow
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-popover shadow-md" />
  </HoverCardPrimitive.HoverCardArrow>
);
HoverCardArrow.displayName = HoverCardPrimitive.HoverCardArrow.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardArrow };
