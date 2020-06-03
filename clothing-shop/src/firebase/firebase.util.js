import firebase from 'firebase/app';
//This utility is used for authentication
import 'firebase/auth'; 
//Firebase has many util libraries which we will not to use all but at this stage we will need two
//Thuis utility ius used to sve to the database CHECK!
import 'firebase/firestore';

const config  = {
    apiKey: "AIzaSyAbf__HtEZuHchb20zaCHb_5Oo33IUk7Q8",
    authDomain: "clothing-shop-2b253.firebaseapp.com",
    databaseURL: "https://clothing-shop-2b253.firebaseio.com",
    projectId: "clothing-shop-2b253",
    storageBucket: "clothing-shop-2b253.appspot.com",
    messagingSenderId: "218376645684",
    appId: "1:218376645684:web:d348daab7eff0c273eee61",
    measurementId: "G-483F3KTLLF"
}

firebase.initializeApp(config);

export const auth = firebase.auth(); //This contains information about the authenticated/active user (Id the user is not signed in then there will be nothing) 
export const firestore = firebase.firestore();

/*There are may authentication methods in firebase.
* We will use google
* This is setting up the google authentication tool
*/

const provider = new firebase.auth.GoogleAuthProvider(); //Gives us access to the google authentication class (Therefore there are come functions which we will use along with this)

provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;