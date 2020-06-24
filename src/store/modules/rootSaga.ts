import { all } from 'redux-saga/effects';

import login from './Login/sagas';
import novidades from './Novidades/sagas';

export default function* rootSaga(): Generator {
   yield all([login, novidades]);
}
