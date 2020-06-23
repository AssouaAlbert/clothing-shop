/**
 * A reducer is a function that gers two properties
 * 1) A state object: Whih holds the previous state
 * 2) Action: What to do with that state(An object of the type; aleays string and the payload)
    //This an example of an action
    {
        type:'', //Always a string
        payload:''
    }
 *  
 */
import UserActions from '../user-actions.types';
const INITIAL_STATE = {
    currentUser: null,
    error: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    console.log('action: ', action);
    switch (action.type) {
        case UserActions.SIGN_IN_SUCCESS:
            return {
                ...state,
                //! For email sign in the email and passwords are push into currenUserManually 
                //?Remember that this will overide the ...state values
                currentUser: action.payload,
                //Set the error to null if the log in is a success
                error: null
            }
        case UserActions.SIGN_IN_FAILURE:
        case UserActions.SIGN_OUT_FAILURE:
        case UserActions.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UserActions.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload //Remember that this will overide the ...state values
            }
        case UserActions.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        default:
            return state;
    }
}
export default userReducer;