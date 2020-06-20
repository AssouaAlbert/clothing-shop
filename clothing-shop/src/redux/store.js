import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux-reducer';
import {persistStore} from 'redux-persist';
// import thunk from 'redux-thunk'; //!Redux saga will replace this: Note that thunk is used to listen to object actions
import createSagaMiddleware from 'redux-saga'
//* Createstore  is used to create store
//!Middlewares are used to listen for information
import logger from 'redux-logger'; //Logger contains methods for the middleware

import {fetchCollectionsStart} from './shop/shop.sagas'
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware]; //?Loggers tell the state of redux after every action is fired
if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}
export const store = createStore(rootReducer,applyMiddleware(...middleWares)); //?There is only one reducer in the create store

// ?After applying the middlewates from the code above, we will add the individual sagas we are going to write

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default {store,persistor};
