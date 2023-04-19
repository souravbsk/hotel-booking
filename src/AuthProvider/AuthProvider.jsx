import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.ini';
import { toast } from 'react-hot-toast';

export const userProvider = createContext(null);

const AuthProvider = ({children}) => {

    const auth = getAuth(app)
    
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)
    //createUser
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //updateUserName 
    const updateName = (currentUser,name) => {
        setLoader(true)
        return updateProfile(currentUser,{
            displayName:name,
        })
    }
    //verify email
    const verifyEmail = (currentUser) => {
        setLoader(true)
        return sendEmailVerification(currentUser)
        .then(() => {
            toast.success('verify link send on your inbox')
        })
    }

    //login user
    const loginUser = (email,password) => {
        setLoader(true)

        return signInWithEmailAndPassword(auth,email,password);
    }
    //reset password
    const resetPassword = (email) => {
        setLoader(true)
        console.log(email);
        return sendPasswordResetEmail(auth,email)
    }

    const logOut = () => {
        return signOut(auth)
    }
    //userfind
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => unSubscribe()

    },[])

    console.log(user);
    const authInfo = {
        createUser,
        updateName,
        verifyEmail,
        loginUser,
        resetPassword,
        user,
        logOut,
        loader
    }
    return (
        <userProvider.Provider value={authInfo}>
            {children}
        </userProvider.Provider>
    );
};

export default AuthProvider;