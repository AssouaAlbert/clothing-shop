import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux-reducer';
import {persistStore} from 'redux-persist';
//Createstore  is used to create store
//Middlewares are used to listen for information
import logger from 'redux-logger'; //Logger contains methods for the middleware
const middleWares = []; //Loggers tell the state of redux after every action is fired
if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}
export const store = createStore(rootReducer,applyMiddleware(...middleWares)); //There is only one reducer in the create store
export const persistor = persistStore(store);
export default {store,persistor};
