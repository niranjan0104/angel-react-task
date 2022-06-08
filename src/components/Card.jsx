import React from 'react'
import "./style.css"

function Card(props) {
  return (
    <div className='flex container'>
      <div>
        <p className='weight-700'>{props.title}</p>
        <p className='money weight-700'> <span>₹</span>{props.price}</p>
      </div>
      <div>
        <div className='icon '><i className={props.link}></i></div>
      </div>
    </div>
  )
}
//"fa-solid fa-hand-back-fist"
export default Card