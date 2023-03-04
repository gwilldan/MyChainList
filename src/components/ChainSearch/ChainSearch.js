import React from 'react';
import "./ChainSearch.css";
// import {ChainTiles} from "../CompIndex"

function ChainSearch(props) {
    return (
        <div className='ChainSearch'>
            <div className='ChainSearch__Search'>
                <p>Search Networks</p>
                <input type="text" placeholder='ETH, Fantom' />
            </div>
            <div className='ChainSearch__Checkbox'><input type="checkbox" /> Include Testnets </div>
            <button className='ChainSearch__Button'>Connect Wallet</button>
        </div>
    );
}

export default ChainSearch;