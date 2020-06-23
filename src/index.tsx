import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import './config/ReactotronConfig';

import store from './store';

import App from './App';

import { Container } from './global/styles';

require('react-native').unstable_enableLogBox();

const Root: React.FC = () => {
   useEffect(() => {
      SplashScreen.hide();
   }, []);

   return (
      <Provider store={store}>
         <Container>
            {Platform.OS === 'ios' && (
               <StatusBar barStyle="light-content" backgroundColor="#0f76bb" />
            )}
            <App />
         </Container>
      </Provider>
   );
};

export default Root;
