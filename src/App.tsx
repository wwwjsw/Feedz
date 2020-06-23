import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './services/navigation';

import Routes from './routes';

const App: React.FC = () => {
   const [isSigned, setSigned] = useState(Boolean);

   useEffect(() => {
      async function getTokenFromStorage(): Promise<any> {
         const token = await AsyncStorage.getItem('BearerToken');

         if (token) {
            setSigned(true);

            return;
         }

         setSigned(false);
      }

      getTokenFromStorage();
   }, []);

   const registerService = (ref: any) => {
      NavigationService.setTopLevelNavigator(ref);
   };

   return (
      <NavigationContainer ref={registerService}>
         <Routes signed={isSigned} profile="" />
      </NavigationContainer>
   );
};

export default App;
