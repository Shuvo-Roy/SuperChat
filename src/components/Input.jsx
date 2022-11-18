import React from 'react'
import Img from "../images/img.png"
import Attach from "../images/attach.png"
const Input = () => {
  return (
    <div className='input'>
      
      <div className="send">
        <img src={Attach} alt=""/>
        <input type="file" style={{display:"none"}} id="file"></input>
        <lable htmlFor="file">
          <img src={Img} alt=""/>
        </lable>
      </div>
      <input type="text" placeholder='Write Massage'/>
      <button> Send</button>
    </div>
  )
}
export  default Input