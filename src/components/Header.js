import React from 'react'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook-f.svg'
import './header.css'
import { auth } from '../config/firebase-config'
import { signOut } from 'firebase/auth'

export default function Header({isLogged, setIsLogged}) {
  const signUserOut = () =>{
      signOut(auth).then(() => {
        localStorage.setItem("isLogged", false)
        setIsLogged(false);
       
      })
  }
  return (
    <div className='header flex'>

      <div className="nav-right ">
        <div className="right flex">
            <li > <a href="/"> Home</a></li>

      </div>
      </div>

      <p className='logo'>
        VIYO
      </p>

      <div className="nav-left ">
        <ul className="left flex">
            <li className='icons facebook'><img src={facebook} className='icon-img' alt="" /></li>
            <li className='icons'><img src={twitter} alt="" className='icon-img'/></li>
            
            {!isLogged &&<button className='login'><a href="/login"> Log in</a></button> }
            {isLogged && <button className='login' onClick={signUserOut}><a href="/login"> Log out</a></button>}
            
        </ul>
      </div>

    </div>
  )
}
