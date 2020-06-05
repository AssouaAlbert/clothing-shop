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
const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload //Remember that this will overide the ...state values
            }
            break;
        default:
            return state;
    }
}
export default userReducer;