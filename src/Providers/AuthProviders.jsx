import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null);

const auth = getAuth(app);
const googleAuthProvider=new GoogleAuthProvider();
const githubAuthProvider=new GithubAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null); 
    const [loading, setLoading]=useState(true);

    const createUser=( email, password)=>{
           return createUserWithEmailAndPassword(auth, email, password);
        
    }

   const signIn=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
   }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleAuthProvider);
    }

   const logOUt=()=>{
    return signOut(auth)
   }

   const signInWithGithub=()=>{
    return signInWithPopup(auth, githubAuthProvider);
   }


    // observe auth state change
   useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, currentUser=>{
      console.log('auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
        unsubscribe();
    }
   },[])

    const authInfo={
        user,
        createUser,
        signIn,
        logOUt,
        loading,
        signInWithGoogle, 
        signInWithGithub
    }



   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;