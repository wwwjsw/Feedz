import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';

import IHeader from '../../interfaces/IHeader';

import {
   Container,
   ContentJustfied,
   Title,
   HeaderActionButton,
   HeaderIconActionButton,
   ViewTitle,
   ImageLogo,
   ViewNewIcon,
} from './styles';

import logo from '../../global/assets/img/SplashScreen.png';

const Header: React.FC<IHeader> = ({
   title,
   onDrawer,
   onBack,
   onFilter,
   color,
}: IHeader) => {
   const _renderContent = (): ReactElement => {
      if (onFilter) {
         return (
            <Container color={color}>
               <ContentJustfied>
                  <HeaderActionButton onPress={onDrawer}>
                     <HeaderIconActionButton
                        name="menu"
                        size={30}
                        color="#fff"
                     />
                  </HeaderActionButton>
                  <ViewTitle align="center" marignRight={0}>
                     <Title>{title}</Title>
                  </ViewTitle>
                  <HeaderActionButton onPress={onFilter}>
                     <HeaderIconActionButton
                        name="logout"
                        size={30}
                        color="#fff"
                     />
                  </HeaderActionButton>
               </ContentJustfied>
            </Container>
         );
      }

      if (onDrawer) {
         return (
            <Container color={color}>
               <ContentJustfied>
                  <HeaderActionButton onPress={onDrawer}>
                     <HeaderIconActionButton
                        name="menu"
                        size={30}
                        color="#fff"
                     />
                  </HeaderActionButton>
                  <ViewTitle align="center">
                     <ImageLogo source={logo} resizeMode="contain" />
                     <Title>{title}</Title>
                  </ViewTitle>
                  <ViewNewIcon />
               </ContentJustfied>
            </Container>
         );
      }

      if (onBack) {
         return (
            <Container color={color}>
               <ContentJustfied>
                  <HeaderActionButton onPress={onBack}>
                     <HeaderIconActionButton
                        name="arrow-left"
                        size={30}
                        color="#fff"
                     />
                  </HeaderActionButton>
                  <ViewTitle align="center">
                     <ImageLogo source={logo} resizeMode="contain" />
                     <Title>{title}</Title>
                  </ViewTitle>
                  <ViewNewIcon />
               </ContentJustfied>
            </Container>
         );
      }

      return <View />;
   };

   return <>{_renderContent()}</>;
};

export default Header;
