import React, { useEffect, useState } from 'react'
import Card from './Card.jsx'
import "./style.css"

function TopSection() {

  const [num, setNum] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.floor(Math.random() * (100 - 10)))
      
    }, 2000)
  }, [])

  return (
    <div className='flex header-cont'>
      <Card title="TOTAL PROFIT & LOSS" price={num + 10} link="fa-solid fa-hand-back-fist" />
      <Card title="NIFTY PROFIT & LOSS" price={num + 5}link="fa-solid fa-credit-card" />
      <Card title="BANKNIFTY PROFIT & LOSS" price={num + 20} link="fa-solid fa-wallet" />
    </div>
  )
}

export default TopSection