import React from 'react';

const iconDefaults = {
  path: 'assets/icons/',
  width: 10,
  extension: 'svg',
};

export const Icon = props => (
  <img 
    data-testid='Icon'
    src={`${props.path || iconDefaults.path}${props.name}.${props.extension || iconDefaults.extension}`} 
    width={iconDefaults.width} 
    alt={props.alt || `icon-${props.name}`} 
    {...props} />
);
