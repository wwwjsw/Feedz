import React from 'react';
import { View } from 'react-native';

import {
   IconDrawerCommunity,
   IconDrawerMaterial,
   ImageIcon,
} from '../../../../global/styles';

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

const IconComponentMaterial: React.FC<IIconComponent> = ({
   iconName,
   color,
   size,
}: IIconComponent) => {
   return <IconDrawerMaterial name={iconName} size={size} color={color} />;
};

const IconImageComponent: React.FC<IIconComponent> = ({
   iconName,
   color,
   size,
}: IIconComponent) => {
   return <ImageIcon source={iconName} tintColor={color} />;
};

export { IconComponentCommunity, IconComponentMaterial, IconImageComponent };
