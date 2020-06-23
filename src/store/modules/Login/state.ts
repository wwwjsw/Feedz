import ILogin from '../../../global/interfaces/ILogin';

export interface ILoginStateReducer {
   readonly data: ILogin;
   readonly loading: boolean;
   readonly error: boolean;
   readonly token: string;
   readonly signed: boolean;
}
