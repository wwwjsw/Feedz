import React from 'react';

import { IconDrawerCommunity } from '../../../../global/styles';

interface IIconComponent {
   iconName: string;
   color: string;
   size: number;
}

const IconComponentCommunity: React.FC<IIconComponent> = ({
   iconName,
   color,
   size,
}: IIconComponent) => {
   return <IconDrawerCommunity name={iconName} size={size} color={color} />;
};

export { IconComponentCommunity };
