import { takeLatest, call, put, all } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { NovidadesTypes } from './types';
import { novidadesSuccess } from './actions';
import api from '../../../services/api';

const saveItemStorage = async (item: string, valor: string): Promise<void> => {
   try {
      await AsyncStorage.setItem(`${item}`, JSON.stringify(valor));
   } catch (error) {
      console.log(error.message);
   }
};

function fetchNovidades(): Promise<any> {
   api.defaults.baseURL = 'https://gb-mobile-app-teste.s3.amazonaws.com';
   api.defaults.headers.Authorization = '';
   return api
      .get('/data.json')
      .then((responseNovidades) => ({ responseNovidades }))
      .catch((errorNovidades) => ({ errorNovidades }));
}

export function* getNovidades<AnyAction>(): object {
   const { responseNovidades, errorNovidades } = yield call(fetchNovidades);

   try {
      if (responseNovidades) {
         const { news } = responseNovidades.data;

         if (errorNovidades) {
            throw new Error('4001');
         }
         yield put(novidadesSuccess(news));
         saveItemStorage('novidades', news);
      } else {
         console.log('errorNovidades', errorNovidades);
      }
   } catch (error) {
      throw new Error(error);
   }
}

export default all([
   takeLatest(NovidadesTypes.NOVIDADES_REQUEST, getNovidades),
]);
