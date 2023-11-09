import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
    const createUser = async (email, password, displayName, photoURL) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
          // Update the user's profile with displayName and photoURL
          await updateProfile(userCredential.user, {
            displayName,
            photoURL,
          });
      
          // Reload the page after successful registration
        //   window.location.reload();
      
          // Return the UserCredential object
          return userCredential;
        } catch (error) {
          console.error(error);
          throw error; // Re-throw the error to be caught in the catch block of the calling function
        }
      };
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        .then(() => {
            window.location.reload()
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.reload()
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {

        createUser,
        logOut,
        signIn,
        googleLogin,
        loading,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;