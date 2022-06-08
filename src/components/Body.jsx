import React, { useState } from 'react'
import "./style.css"
import Table from './Table';

function Body() {

    const [flag, setFlag] = useState(true);

    const clickHandler = (val) => {
        setFlag(val)
    }

    return (
        <div className='mt-15px'>

            <div className='flex body-cont'>
                <div className='flex'>
                    <div><a style={{backgroundColor: flag ? "active-btn" : "btn"}} onClick={() => clickHandler(true)} className={"nifty nifty-order " + (flag ? "active-btn " : "btn")}>NIFTY</a></div>
                    <div><a style={{backgroundColor: flag ? "btn" : "active-btn"}} onClick={() => clickHandler(false)} className={"bank-nifty " + (flag ? "btn " : "active-btn")}>BANKNIFTY</a></div>
                </div>

                <div className="flex">
                    <div><a href="#" className="new-order nifty-order">+ New Order</a></div>
                    <div><i className="fa-solid fa-right-from-bracket"></i></div>
                </div>
            </div>

            <Table nifty={flag}/>
        </div>
    )
}

export default Body