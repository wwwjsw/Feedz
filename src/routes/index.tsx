/* eslint-disable no-unused-expressions */
import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../global/screens/Login';
import CadastroScreen from '../global/screens/Cadastro';

import userRoute from './userRoute';

const Stack = createStackNavigator();

interface INavigationProps {
   signed: boolean;
   profile: string;
}

function HomeNavigator(): ReactElement {
   return (
      <Stack.Navigator headerMode="none">
         <Stack.Screen name="aluno" component={userRoute} />
      </Stack.Navigator>
   );
}

const currentRoute = (signed: boolean): string => {
   if (signed) {
      return 'Home';
   }

   return 'Login';
};

export default function RootNavigator({
   signed,
}: INavigationProps): ReactElement {
   function RooStack(): ReactElement {
      return (
         <Stack.Navigator
            headerMode="none"
            initialRouteName={currentRoute(signed)}
         >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="Home" component={HomeNavigator} />
         </Stack.Navigator>
      );
   }

   return <RooStack />;
}
