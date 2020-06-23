import React, { useState, Fragment } from 'react';
import { View, Text } from 'react-native';

import {
   DrawerContentScrollView,
   DrawerItemList,
   DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { ISidebar } from 'src/interfaces/ISidebar';

import SidebarIconOptions from './SidebarIconOptions';

import {
   LogoutButton,
   SidebarContainer,
   TextButton,
   ViewLine,
   ViewInfoCircle,
   ViewCircle,
   TextAbreviateName,
   ViewTextName,
   TextName,
} from './styles';

import logo from '../../global/assets/img/SplashScreen.png';

const SideBar: React.FC<ISidebar> = ({ props, menuOptions }) => {
   const navigation = useNavigation();
   const [menu, setMenu] = useState(menuOptions);
   const [indexSelected, setIndexSelected] = useState(0);

   const clickOption = (page: string): void => {
      navigation.navigate(page);
      navigation.dispatch(DrawerActions.closeDrawer());
   };

   const clickSelected = (indexPai: number) => {
      setIndexSelected(indexPai);
   };

   return (
      <DrawerContentScrollView {...props}>
         <SidebarContainer>
            <ViewInfoCircle>
               <ViewCircle>
                  <TextAbreviateName>UN</TextAbreviateName>
               </ViewCircle>
            </ViewInfoCircle>
            <ViewTextName>
               <TextName>Nome</TextName>
            </ViewTextName>
         </SidebarContainer>
         {menu.map((options, index: number) => {
            return (
               <Fragment key={options.id}>
                  <LogoutButton
                     onPress={() => {
                        clickSelected(index);
                        clickOption(options.page);
                     }}
                  >
                     {indexSelected === index ? (
                        <SidebarIconOptions
                           page={options.page}
                           color="#741171"
                           size={20}
                        />
                     ) : (
                        <SidebarIconOptions
                           page={options.page}
                           color="#838383"
                           size={20}
                        />
                     )}
                     {indexSelected === index ? (
                        <TextButton color="#741171">{options.label}</TextButton>
                     ) : (
                        <TextButton color="#000000DE">
                           {options.label}
                        </TextButton>
                     )}
                  </LogoutButton>
                  {indexSelected === index && <ViewLine backColor="#741171" />}
               </Fragment>
            );
         })}
      </DrawerContentScrollView>
   );
};

export default SideBar;
