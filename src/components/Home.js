import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {db} from '../config/firebase-config'
import './home.css'

export default function Home({isLogged}) {
    const [postItem,setPostItems]= useState([])
    const postCollection = collection(db, "posts")

    useEffect(()=>{
      const getPosts = async () =>{
        const data = await getDocs(postCollection);
        setPostItems(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        
      }
      getPosts();
    });

    const deletePost = async (id) =>{
      const postDoc = doc(db,"posts",id);
      await deleteDoc(postDoc);
    }

  return (
    <div className="home">
      <div style={{textAlign:'center'}}>
        <p style={{fontSize: '2rem', margin:'1.5rem', fontFamily: 'monospace'}}>Here at Viyo, We share our thoughts and ideas.</p>
        {isLogged && <button style={{backgroundColor:'transparent', border:'1px solid gray',padding:'.7rem'}}> <a href="./" 
        style={{textDecoration:'none', 
        fontSize:'1rem', 
        color:'black'}} > <a href="/createpost"> Create post</a>
        </a></button>}
      </div>

      <div className="display-posts">
        {postItem.map((post) => {
          return <div className='post-contain'>
            <p className="post-title top">
              {post.title}
            </p>
            <p className='post-body'>{post.descText}</p>
            <p className="post-content">{post.text}</p>
            <div className="lower">
              <p className='flex lower-text name'>@{post.author.name}</p>
              
            </div>
            <div className="delete">
              {isLogged && <button onClick={()=>{deletePost(post.id);}}
              style={{backgroundColor:'transparent', border:'none', marginTop:'1rem', top:'0'}}>&#128465;</button>}
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
