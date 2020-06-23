import { LoginTypes } from './types';
import IAction from '../interfaces/IAction';

export function signInRequest(
   username?: string,
   password?: string,
): IAction<object, string> {
   return {
      type: LoginTypes.SIGN_IN_REQUEST,
      payload: { username, password },
   };
}

export function signInSuccess(data: object): IAction<object, string> {
   return {
      type: LoginTypes.SIGN_IN_SUCCESS,
      payload: { data },
   };
}

export function signInError(): IAction<void, string> {
   return {
      type: LoginTypes.SIGN_IN_ERROR,
   };
}

export function signOutRequest(): IAction<object, void> {
   return {
      type: LoginTypes.SIGN_OUT_REQUEST,
   };
}
