import { AnyAction } from 'redux';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginTypes } from './types';
import { signInSuccess } from './actions';

import api from '../../../../services/api';
import NavigationService from '../../../../services/navigation';

const saveItemStorage = async (item: string, valor: string): Promise<void> => {
   try {
      await AsyncStorage.setItem(`${item}`, JSON.stringify(valor));
   } catch (error) {
      console.log(error.message);
   }
};

const removeItemStorage = async (item: string): Promise<void> => {
   try {
      await AsyncStorage.removeItem(item);
      NavigationService.navigate('Login');
   } catch (error) {
      console.log(error.message);
   }
};

function fetchLogin(user: string, password: string): Promise<any> {
   const system = 'PSDMobile';
   const accessClient = 'PSDMobile';
   const userIPAddress = 'https://192.168.0.1';
   api.defaults.baseURL = 'https://devpositivoid.azurewebsites.net';
   api.defaults.headers.Authorization = '';
   return api
      .post('/Login/Authentication', {
         user,
         password,
         system,
         accessClient,
         userIPAddress,
      })
      .then((responseLogin) => ({ responseLogin }))
      .catch((errorLogin) => ({ errorLogin }));
}

function fetchPerfil(token: string): Promise<any> {
   api.defaults.baseURL = 'https://positivocoredev.azurewebsites.net';

   api.defaults.headers.Authorization = `Bearer ${token}`;
   return api
      .get('/Perfil')
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
            const existPerfil = responsePerfil.data.find(
               (obj: { nome: string }) =>
                  obj.nome === 'Professor' || obj.nome === 'Aluno',
            );

            if (existPerfil == null) {
               throw new Error('401');
            }
            yield put(signInSuccess(token));

            // NavigationService.navigate('Home');
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
