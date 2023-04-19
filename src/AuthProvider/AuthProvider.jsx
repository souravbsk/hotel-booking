import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.ini';
import { toast } from 'react-hot-toast';

export const userProvider = createContext(null);

const AuthProvider = ({children}) => {

    const auth = getAuth(app)
    
    const [user,setUser] = useState(null);
    //createUser
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //updateUserName 
    const updateName = (currentUser,name) => {
        return updateProfile(currentUser,{
            displayName:name,
        })
    }
    //verify email
    const verifyEmail = (currentUser) => {
        return sendEmailVerification(currentUser)
        .then(() => {
            toast.success('verify link send on your inbox')
        })
    }

    //login user
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    //reset password
    const resetPassword = (email) => {
        console.log(email);
        return sendPasswordResetEmail(auth,email)
    }

    //userfind
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unSubscribe()

    },[])
    const authInfo = {
        createUser,
        updateName,
        verifyEmail,
        loginUser,
        resetPassword
    }
    return (
        <userProvider.Provider value={authInfo}>
            {children}
        </userProvider.Provider>
    );
};

export default AuthProvider;