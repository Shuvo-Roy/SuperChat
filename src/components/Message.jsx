import React from 'react'
import IMG from "../images/user.jpg"
const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={IMG} alt=""/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src={IMG} alt=""/>
      </div>
    </div>
  )
}
export  default Message