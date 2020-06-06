import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import toggleCartReducer from './cart/cart.reducer';
export default combineReducers({
    user: userReducer,
    toggleCart: toggleCartReducer
});