import React, { ReactElement } from 'react';
import {
   createStackNavigator,
   StackNavigationProp,
} from '@react-navigation/stack';
import {
   createDrawerNavigator,
   DrawerNavigationProp,
} from '@react-navigation/drawer';
import { CompositeNavigationProp } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import menuOptions from '../data/menu.json';
import SideBar from '../components/SideBar';

type RootStackParamList = {
   DrawerNavigator: undefined;
   HomeScreen: undefined;
};

type DrawerParamList = {
   HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator(): ReactElement {
   return (
      <Drawer.Navigator
         initialRouteName="HomeScreen"
         drawerContent={(props) => (
            <SideBar {...props} menuOptions={menuOptions} />
         )}
         drawerContentOptions={{
            activeTintColor: '#43a047',
            activeBackgroundColor: '#dcdcdc',
            itemStyle: {
               marginTop: 0,
               marginBottom: 0,
               width: '100%',
               marginLeft: 0,
               marginRight: 0,
               borderRadius: 0,
            },
            labelStyle: {
               marginLeft: -10,
            },
         }}
      >
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator>
   );
}

export default function RootNavigator(): ReactElement {
   return (
      <Stack.Navigator headerMode="none">
         <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
   );
}

export declare type AlunoProps = CompositeNavigationProp<
   StackNavigationProp<RootStackParamList>,
   DrawerNavigationProp<DrawerParamList>
>;
