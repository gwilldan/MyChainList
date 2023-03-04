import React from 'react';
import "./ChainTiles.css";
import {FaEthereum, } from "react-icons/fa"
import "react-icons/fi"
import { FiChevronDown } from 'react-icons/fi';

function ChainTiles(props) {
    return (
        <div className='ch'>
        <div className='ChainTiles'>
            <div className='ChainTiles__name'>
                <FaEthereum className='ChainTiles__name-icon'/>
                <h3>Ethereum Mainnet</h3>
            </div>
            <div className='ChainTiles__ChainData'>
                <p className='ChainTiles__ChainData-ID'>ChainID</p>
                <p className='ChainTiles__ChainData-Currency'>Currency</p>
                <p className='ChainTiles__ChainData-IDResult'>1</p>
                <p className='ChainTiles__ChainData-CurrencyResult'>ETH</p>
            </div>

            <button>Connect Wallet</button>
            <FiChevronDown />
        </div>

        <div className='ChainTiles'>
            <div className='ChainTiles__name'>
                <FaEthereum className='ChainTiles__name-icon'/>
                <h3>Ethereum Mainnet</h3>
            </div>
            <div className='ChainTiles__ChainData'>
                <p className='ChainTiles__ChainData-ID'>ChainID</p>
                <p className='ChainTiles__ChainData-Currency'>Currency</p>
                <p className='ChainTiles__ChainData-IDResult'>1</p>
                <p className='ChainTiles__ChainData-CurrencyResult'>ETH</p>
            </div>

            <button>Connect Wallet</button>
            <FiChevronDown />
        </div>

        <div className='ChainTiles'>
            <div className='ChainTiles__name'>
                <FaEthereum className='ChainTiles__name-icon'/>
                <h3>Ethereum Mainnet</h3>
            </div>
            <div className='ChainTiles__ChainData'>
                <p className='ChainTiles__ChainData-ID'>ChainID</p>
                <p className='ChainTiles__ChainData-Currency'>Currency</p>
                <p className='ChainTiles__ChainData-IDResult'>1</p>
                <p className='ChainTiles__ChainData-CurrencyResult'>ETH</p>
            </div>

            <button>Connect Wallet</button>
            <FiChevronDown />
        </div>

        </div>
    );
}

export default ChainTiles;