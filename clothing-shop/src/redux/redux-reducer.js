import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import toogleCartReducer from './cart/cart.reducer';
export default combineReducers({
    user: userReducer,
    toogleCart: toogleCartReducer
});