import React from 'react';
import "./ChainTiles.css";
import {FaEthereum, } from "react-icons/fa"
import { FiChevronDown } from 'react-icons/fi';

function ChainTiles({id, currency, name}) {

    return (
        <div className='ChainTiles'>
            <div className='ChainTiles__name'>
                <FaEthereum className='ChainTiles__name-icon'/>
                <h3>{name}</h3>
            </div>
            <div className='ChainTiles__ChainData'>
                <p className='ChainTiles__ChainData-ID'>ChainID</p>
                <p className='ChainTiles__ChainData-Currency'>Currency</p>
                <p className='ChainTiles__ChainData-IDResult'>{id}</p>
                <p className='ChainTiles__ChainData-CurrencyResult'>{currency}</p>
            </div>

            <div className='ChainTiles__Connect'>
                <button className='ChainTiles__Connect-button1'>Connect Wallet</button>
                <button className='ChainTiles__Connect-button2'><FiChevronDown /></button>
            </div>
        </div>
    );
}

export default ChainTiles;