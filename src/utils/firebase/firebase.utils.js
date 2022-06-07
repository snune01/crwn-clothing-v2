import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKBxQsBeo5mqRwotmYZza5fYFQQ327onQ",
  authDomain: "crown-clothing-db-c8be0.firebaseapp.com",
  projectId: "crown-clothing-db-c8be0",
  storageBucket: "crown-clothing-db-c8be0.appspot.com",
  messagingSenderId: "334678912682",
  appId: "1:334678912682:web:4d7b35fdbe1983f7b36ad3",
  measurementId: "G-QSCKBTJYXB",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user" + error.message);
    }
  } else {
    return userDocRef;
  }
};
