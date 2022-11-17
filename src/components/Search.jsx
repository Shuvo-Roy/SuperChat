import React from 'react'
import img from "../images/user.jpg"
const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Search here'/>
      </div>
      <div className='userChat'>
        <img src={img} alt=""/>
        <div className='userChatInfo'>
          <span>Shuvo</span>
        </div>
      </div>
    </div>
  )
}
export  default Search