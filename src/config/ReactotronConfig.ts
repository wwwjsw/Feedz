import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';

declare global {
   interface Console {
      tron: any;
   }
}

if (__DEV__) {
   const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
      .configure(Platform.OS === 'ios' ? '' : { host: '192.168.1.111' })
      .useReactNative()
      .use(reactotronRedux())
      .use(reactotronSaga())
      .connect();

   tron.clear!();

   console.tron = tron;
}
