import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import directoryReducer from './directory/directory.reducer'
import toggleCartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import {persistReducer} from 'redux-persist';
//ForsessionStorage
//import sessionStorage from 'redux-persist/es/storage/session'
//Use local storage as default storage
import storage from 'redux-persist/lib/storage'; //This will reture the local storage object on the browser


//Local storage Jason configurations 

const persistConfig = {
    key: 'root',
    storage, //store it in torage
    whiteList: ['cart']//Array containing the name of any of the reducers that we wanna store
}
export const rootReducer = combineReducers({
    user: userReducer,
    toggleCart: toggleCartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
export default persistReducer(persistConfig,rootReducer);