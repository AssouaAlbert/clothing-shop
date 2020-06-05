export const setCurrentUser = user => ({ //Note that the user us the user object if log in i.e. null or and object
    type: 'SET_CURRENT_USER',
    payload: user
})