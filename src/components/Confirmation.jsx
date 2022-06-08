import React from 'react'
import "./style.css"

function Confirmation(props) {

    return (
        <div className='confirm-modal-wrapper'>
            <div className='confirm-cont'>
                <div className='warning'>⚠</div>
                <h2>Are you sure ?</h2>
                <p className='mt-15px'>Once Squared off, you will not be able to recover this order</p>
                <div className='flex mt-15px'>
                    <div onClick={() => props.modalHandler(false)} className='confirm-bdr-cnl brd-cmn'><a href="#">Cancel</a></div>
                    <div onClick={() => props.modalHandler(false)} className='brd-cmn size'><a href="#">Square off today</a></div>
                    <div onClick={() => props.modalHandler(false)} className='brd-cmn size'><a href="#">Square off all</a></div>
                </div>
            </div>
        </div>

    )
}

export default Confirmation