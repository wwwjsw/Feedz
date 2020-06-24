import { combineReducers } from 'redux';

import login from './Login/reducer';
import novidades from './Novidades/reducer';

export const rootReducer = combineReducers({
   login,
   novidades,
});

export type RootState = ReturnType<typeof rootReducer>;
