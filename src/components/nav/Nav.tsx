import React, { useEffect, useState } from 'react'
import {Navbar,Navlogo,NavAvatar}from "./Nav.styles"

function Nav() {
  // const[show, SetShow]=useState(false);

  // useEffect(()=>{
  //   window.addEventListener("scroll",()=>
  //   {
  //     if(window.scrollY > 100){
  //       SetShow(true);

  //     }else SetShow(false);
  //   })

  //   return ()  {
  //     window.removeEventListener("scroll")
      
  //   }
  //   // (window.onscroll = null);
    
  // },[])

 

  // Navbar:className={`Navbar ${show && "nav__black"}`}

  return (
    <Navbar>
      <Navlogo src="assets/image/Netflix-Logo.wine.png" alt='Netflix logo'/>
      <NavAvatar src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='Netflix logo'/>
    </Navbar>
  )
}

export default Nav
