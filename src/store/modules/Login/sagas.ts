import { AnyAction } from 'redux';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginTypes } from './types';

import { signInSuccess } from './actions';

import api from '../../../services/api';
import NavigationService from '../../../services/navigation';

// export function* signIn({ payload: { email, password } }: AnyAction): object {
//    try {
//       const response = yield call(api.post, '/api/authentication', {
//          email,
//          password,
//       });

//       if (response.data.token) {
//          yield put(signInSuccess(response.data.token));
//          yield call(
//             [AsyncStorage, 'setItem'],
//             'RentGoToken',
//             response.data.token,
//          );

//          const res = yield call(api.get, '/api/passenger-auth');
//          yield call(
//             [AsyncStorage, 'setItem'],
//             'RentGoUser',
//             JSON.stringify(res.data.result[0]),
//          );

//          NavigationService.navigate('Home');
//       }
//    } catch (error) {
//       console.tron.log('error', error);
//    }
// }

// export async function signOut(): Promise<void> {
//    try {
//       await AsyncStorage.clear();

//       NavigationService.navigate('Login');
//    } catch (error) {
//       console.tron.log('erro');
//    }
// }

const saveItemStorage = async (item: string, valor: string): Promise<void> => {
   try {
      await AsyncStorage.setItem(`${item}`, JSON.stringify(valor));
   } catch (error) {
      console.log(error.message);
   }
};

const removeItemStorage = async (item: string): Promise<void> => {
   try {
      await AsyncStorage.removeItem('BearerToken');
      NavigationService.navigate('Login');
   } catch (error) {
      console.log(error.message);
   }
};

function fetchLogin(email: string, password: string): Promise<any> {
   api.defaults.baseURL = 'https://reqres.in';
   api.defaults.headers.Authorization = '';
   return api
      .post('/api/login', { email, password })
      .then((responseLogin) => ({ responseLogin }))
      .catch((errorLogin) => ({ errorLogin }));
}

function fetchPerfil(token: string): Promise<any> {
   api.defaults.baseURL = 'https://reqres.in';
   api.defaults.headers.Authorization = '';
   return api
      .get('/api/login')
      .then((responsePerfil) => ({ responsePerfil }))
      .catch((errorPerfil) => ({ errorPerfil }));
}

export function* signIn({
   payload: { username, password },
}: AnyAction): object {
   const { responseLogin, errorLogin } = yield call(
      fetchLogin,
      username,
      password,
   );

   try {
      if (responseLogin) {
         const token = responseLogin.data;
         saveItemStorage('BearerToken', token);

         const { responsePerfil, errorPerfil } = yield call(fetchPerfil, token);

         if (responsePerfil) {
            if (errorPerfil) {
               throw new Error('401');
            }

            yield put(signInSuccess(token));

            NavigationService.navigate('Home');
            console.tron.log('nav');
         } else {
            console.log('errorPerfil', errorPerfil);
         }
      } else {
         console.log('errorLogin', errorLogin);
      }
   } catch (error) {
      throw new Error(error);
   }
}

export async function signOut(): Promise<void> {
   removeItemStorage('BearerToken');
}

export default all([
   takeLatest(LoginTypes.SIGN_IN_REQUEST, signIn),
   takeLatest(LoginTypes.SIGN_OUT_REQUEST, signOut),
]);
