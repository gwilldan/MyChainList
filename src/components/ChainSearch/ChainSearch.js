import React, {useState} from 'react';
import "./ChainSearch.css";
import {ImSearch} from "react-icons/im"


function ChainSearch(props) {

    const [search, addSearch] = useState("");

    console.log(search);

    return (
        <div className='ChainSearch'>
            <div className='ChainSearch__Search'>
                <p>Search Networks</p>
                <input type="text" placeholder='ETH, Fantom, ...' onChange={(event) => addSearch(event.target.value)} />
                <button className='imSearch'><ImSearch /></button>
            </div>
            <div className='ChainSearch_DownDIV'>
                <div className='ChainSearch__Checkbox'><input type="checkbox" /> Include Testnets </div>
                <button className='ChainSearch__Button'>Connect Wallet</button> 
            </div>
        </div>
    );
}

export default ChainSearch;