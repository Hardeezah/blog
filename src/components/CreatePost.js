import React, { useEffect, useState } from 'react'
import './createpost.css'
import { addDoc, collection } from 'firebase/firestore'
import {db,auth} from "../config/firebase-config"

export default function CreatePost({isLogged}) {
  const [title,setTitle]= useState("");
  const [text,setText]= useState("");
  const [descText,setDescText]= useState("");


  const postCollection = collection(db, "posts");
  const createPost = async () =>{
    await addDoc(postCollection, 
      {title,
      descText
      ,text,
      author:
      {name: auth.currentUser.displayName, 
      id:auth.currentUser.uid,
      }
    })
      window.location.pathname="/"
  };

  useEffect(()=>{
    if (!isLogged){
      
    }
  })

  return (
    <div className='post-container' style={{textAlign:'center', margin:'2rem', fontFamily:'monospace'}}>
      <p className='title'>Create New Post</p>

      <div className="body">
          <input type="text" placeholder='Type the title here...' onChange={(event) => {setTitle(event.target.value)}}/>
          <textarea name="" id=""  rows="3" placeholder='Type blog description here...' onChange={(event) => {setDescText(event.target.value)}}></textarea>
          <textarea rows = "20" type="text" className='text-body' placeholder='Type the body here...' onChange={(event) => {setText(event.target.value)}}/>
          
      </div>
      
        <input type = "submit" className='submit-btn' value = "submit" onClick={createPost} />
    </div>
  )
}
