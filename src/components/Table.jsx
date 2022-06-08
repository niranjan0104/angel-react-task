import React, { useState } from 'react'
import "./style.css"
import Confirmation from './Confirmation'

function Table({ nifty }) {

    const [modal , setModal] = useState(false)

    const modalHandler = (val) => {
        setModal(val)
    }

    return (
        <div>

        {
            modal && <Confirmation modalHandler={modalHandler} />
        }
            <div className='flex sec-div'>
                <p className='running'>Running Trades</p>
                <p className='nifty-order square-off' onClick={() => modalHandler(true)}> <a href="#"> Square off </a></p>
            </div>

            <table className='table-data'>
                <thead>
                    <tr className='row'>
                        <td className='pl-10'>S.no</td>
                        <td>Symbol</td>
                        <td>Side</td>
                        <td>Entry Level</td>
                        <td>Entry Time</td>
                        <td>Entry Price</td>
                        <td>Qty</td>
                        <td>LTP</td>
                        <td>PNL</td>
                    </tr>
                </thead>
                {
                    !nifty && <>
                        <tbody>
                            <tr>
                                <td className='pl-10'>1</td>
                                <td>BANKNIFTY22JUN35100CE</td>
                                <td>BUY</td>
                                <td>35100</td>
                                <td>22-03-2022 09:17:36</td>
                                <td>802.50</td>
                                <td>50</td>
                                <td>850.56</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td className='pl-10'>1</td>
                                <td>BANKNIFTY22JUN35100CE</td>
                                <td>SELL</td>
                                <td>35100</td>
                                <td>22-03-2022 09:17:36</td>
                                <td>802.50</td>
                                <td>50</td>
                                <td>756.84</td>
                                <td>300</td>
                            </tr>
                        </tbody>
                    </>
                }
            </table>

            <div>
                <p className='running mt-15px'>Completed Trades</p>
            </div>

            <table className='table-data'>
                <thead>
                    <tr className='row'>
                        <td className='pl-10'>S.no</td>
                        <td>Symbol</td>
                        <td>Side</td>
                        <td>Entry Level</td>
                        <td>Entry Time</td>
                        <td>Entry Price</td>
                        <td>Qty</td>
                        <td>LTP</td>
                        <td>PNL</td>
                        <td>LTP</td>
                        <td>PNL</td>
                    </tr>
                </thead>
            </table>

        </div>
    )
}

export default Table