import userActions from '../user-actions.types';
export const setCurrentUser = user => ({ //Note that the user us the user object if log in i.e. null or and object
    type: userActions.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: userActions.GOOGLE_SIGN_IN_START
});

export const SigninSuccess = (user) => ({
    type: userActions.SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userActions.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});


export const SinginFailure = (errorMessage) => ({
    type: userActions.EMAIL_SIGN_IN_FAILURE,
    payload: errorMessage
})

export const CheckUserSession = () => ({
    type: userActions.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: userActions.SIGN_OUT_START,
})
export const signOutFailure = (error) => ({
    type: userActions.SIGN_OUT_FAILURE,
    payload: error
})
export const signOutSuccess = () => ( {
    type: userActions.SIGN_OUT_SUCCESS,
})

