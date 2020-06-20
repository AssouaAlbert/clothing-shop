import userActions from '../user-actions.redux';
export const setCurrentUser = user => ({ //Note that the user us the user object if log in i.e. null or and object
    type: userActions.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: userActions.GOOGLE_SIGN_IN_START
});

export const googleSigninSuccess = (user) => ({
    type: userActions.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSinginFailure = (errorMessage) => ({
    type: userActions.GOOGLE_SIGN_IN_FAILURE,
    payload: errorMessage
})

export const emailSignInStart = () => ({
    type: userActions.EMAIL_SIGN_IN_START
});

export const emailSigninSuccess = (user) => ({
    type: userActions.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSinginFailure = (errorMessage) => ({
    type: userActions.EMAIL_SIGN_IN_FAILURE,
    payload: errorMessage
})

