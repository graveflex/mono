import isNull from 'lodash/isNull';
import React from 'react';

import coreIcons from '../../icons/core';

export type IconProps = {
  name?: keyof typeof coreIcons;
  color?: string | null;
  size?: string | null;
};

function CoreIcons({ name, color, size = '35' }: IconProps) {
  const Icon = name && !isNull(name) && coreIcons?.[name];
  if (Icon) {
    return (
      <Icon
        color={color ?? undefined}
        fill={color ?? undefined}
        height={size ?? '35'}
        width={size ?? '35'}
      />
    );
  }
  return null;
}

function RenderIcon({ name, color, size }: IconProps) {
  return <CoreIcons name={name} color={color} size={size} />;
}

export default RenderIcon;
