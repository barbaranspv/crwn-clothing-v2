import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcx4QR-35-Fy9k3dKsJezzREmyEotjrGs",
  authDomain: "crwn-clothing-db-c389a.firebaseapp.com",
  projectId: "crwn-clothing-db-c389a",
  storageBucket: "crwn-clothing-db-c389a.appspot.com",
  messagingSenderId: "373677234428",
  appId: "1:373677234428:web:d833a8a3cf29a99f445f79",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export  const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch {
        console.log("error")
    }
  }
  return userDocRef
};


export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return ;

    return await createUserWithEmailAndPassword(auth, email, password)


}

export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return ;

    return await signInWithEmailAndPassword(auth, email, password)


}
export const signOutUser= async () =>{
 
    return await signOut(auth)


}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)