import { produce } from 'immer';
import { NovidadesTypes } from './types';
import { INovidadesStateReducer } from './state';

const INITIAL_STATE: INovidadesStateReducer = {
   news: [],
   loading: false,
   error: false,
};

export default function novidades(
   state = INITIAL_STATE,
   action: any,
): INovidadesStateReducer {
   return produce(state, (draft) => {
      switch (action.type) {
         case NovidadesTypes.NOVIDADES_REQUEST: {
            draft.loading = true;
            break;
         }

         case NovidadesTypes.NOVIDADES_SUCCESS: {
            draft.loading = false;
            break;
         }

         default:
            break;
      }
   });
}
