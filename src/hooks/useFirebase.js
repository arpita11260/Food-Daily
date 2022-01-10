import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error.message);
              })
            .finally(() => setIsLoading(false));
    }
  

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;


//   const signInWithGoogle = (location, history) => {
//     setIsLoading(true);
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         saveUser(user.email, user.displayName, "PUT");
//         // setUser(user);
//         const destination = location?.state?.from || "/home";
//         history.replace(destination);
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       })
//       .finally(() => setIsLoading(false));
//   };

//   const signInWithGoogle = (location, history) => {
//     setIsLoading(true);
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         const destination = location?.state?.from || "/home";
//         history.replace(destination);
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       })
//       .finally(() => setIsLoading(false));
//   };