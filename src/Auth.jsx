import React from 'react'
import { signInWithPopup,signOut } from 'firebase/auth'
import { googleProvider,auth } from './firebase'
 const Auth=()=>{
const signInWithGoogle=async()=>{
    try{
        await signInWithPopup(auth,googleProvider)
    }
    catch(err){
        console.log(err)
    }
}
const Logout=async()=>{
    try{
        await signOut(auth)
    }
    catch(err){
        console.log(err)
    }
}

    return(
        <>
        <button onClick={signInWithGoogle}>Sign in with google</button>
        <button onClick={Logout}>Logout</button>
        </>
    )
}
export default Auth