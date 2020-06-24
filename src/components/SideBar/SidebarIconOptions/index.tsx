import React from 'react';

import { IconComponentCommunity } from './IconComponent';

interface ISidebarIconOptions {
   page: string;
   color: string;
   size: number;
}

const SidebarIconOptions: React.FC<ISidebarIconOptions> = ({
   page,
   color,
   size,
}: ISidebarIconOptions) => {
   switch (page) {
      case 'HomeScreen':
         return (
            <IconComponentCommunity iconName="home" color={color} size={size} />
         );
      case 'NovidadesScreen':
         return (
            <IconComponentCommunity
               iconName="trending-up"
               color={color}
               size={size}
            />
         );
      default:
         return null;
   }
};

export default SidebarIconOptions;
