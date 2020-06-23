import React from 'react';

import {
   IconComponentCommunity,
   IconComponentMaterial,
   IconImageComponent,
} from './IconComponent';

import bookMark from '../../../global/assets/icons/icon-estante.png';

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
      case 'Aulas':
         return (
            <IconComponentCommunity
               iconName="trending-up"
               color={color}
               size={size}
            />
         );
      case 'Mensagem':
         return (
            <IconComponentCommunity
               iconName="email"
               color={color}
               size={size}
            />
         );
      case 'Agenda':
         return (
            <IconComponentCommunity
               iconName="calendar"
               color={color}
               size={size}
            />
         );
      // case 'Boletim':
      //    return (
      //       <IconDrawer
      //          iconName={IconBoletim}
      //
      //          color={color}
      //          size={size}
      //       />
      //    );
      case 'Perfil':
         return (
            <IconComponentCommunity
               iconName="account"
               color={color}
               size={size}
            />
         );
      case 'Configuracao':
         return (
            <IconComponentCommunity iconName="cog" color={color} size={size} />
         );
      case 'Notificacao':
         return (
            <IconComponentCommunity iconName="bell" color={color} size={size} />
         );
      case 'Estante':
         return (
            <IconImageComponent iconName={bookMark} color={color} size={size} />
         );
      case 'Atividades':
         return (
            <IconComponentCommunity
               iconName="square-edit-outline"
               color={color}
               size={size}
            />
         );
      case 'Avaliacoes':
         return (
            <IconComponentCommunity
               iconName="clipboard-text"
               color={color}
               size={size}
            />
         );
      case 'Relatorios':
         return (
            <IconComponentCommunity iconName="poll" color={color} size={size} />
         );
      case 'Carrossel':
         return (
            <IconComponentCommunity
               iconName="view-carousel"
               color={color}
               size={size}
            />
         );

      default:
         return null;
   }
};

export default SidebarIconOptions;
