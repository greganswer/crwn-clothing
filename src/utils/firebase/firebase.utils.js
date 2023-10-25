import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_LvTyeJ7_IwFs7OZrv8mi2RGLqYfv5xw",
  authDomain: "crwn-db-b30b5.firebaseapp.com",
  databaseURL: "https://crwn-db-b30b5.firebaseio.com",
  projectId: "crwn-db-b30b5",
  storageBucket: "crwn-db-b30b5.appspot.com",
  messagingSenderId: "341294776748",
  appId: "1:341294776748:web:b2d522bc36fa41f565ba09"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
