import React from 'react';
import ChainArray from "../../Data/ChainArray"
import ChainTiles from '../ChainTiles/ChainTiles';
import "./ChainList.css"

function ChainList(props) {

    const chainMap = ChainArray.map((i) => {
       return (<ChainTiles id={i.chainID} currency = {i.currency} name={i.name}/>);
    });

    return (
        <div className='ChainList'>
            {chainMap}
        </div>
    );
}

export default ChainList;