import { NovidadesTypes } from './types';
import IAction from '../interfaces/IAction';

export function novidadesRequest(): IAction<object, string> {
   return {
      type: NovidadesTypes.NOVIDADES_REQUEST,
   };
}

export function novidadesSuccess(data: object): IAction<object, string> {
   return {
      type: NovidadesTypes.NOVIDADES_SUCCESS,
      payload: data,
   };
}
