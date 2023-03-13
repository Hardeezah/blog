import React from 'react'
import{auth, provider} from '../config/firebase-config';
import {signInWithPopup} from 'firebase/auth';


export default function Login({setIsLogged}) {

 const signInWithGoogle = () =>{
    signInWithPopup(auth,provider).then((result) =>{
      localStorage.setItem("isLogged", true)
      setIsLogged(true)
      window.location.pathname="/"
    }) 
    
  }
  return (
    <div className='login-container' style={{textAlign:'center', fontFamily:'monospace',justifyContent:'center'}}>
      <p className='login-text' style={{fontSize:'1.7rem', margin:'2rem'}}>Sign In with Google</p>
      <button className='login-google'
      style={{padding:'.7rem', backgroundColor:'transparent',fontSize:'1rem'}} 
      onClick={signInWithGoogle}
      >Sign In</button>
        
    </div>
  )
}
