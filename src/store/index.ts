import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const composer = __DEV__
   ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
   : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
