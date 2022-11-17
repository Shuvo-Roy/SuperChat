import React from 'react'
import img from "../images/user.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Super Chat</span>
      <div className='user'>
        <img src={img} alt=''></img>
        <span>Shuvo</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
export  default Navbar
