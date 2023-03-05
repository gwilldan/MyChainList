import React from 'react';
import ChainArray from "../../Data/ChainArray"
import ChainTiles from './ChainTiles';

function ChainList(props) {

    const chainMap = ChainArray.map((i) => {
       return (<ChainTiles id={i.chainID} currency = {i.currency} name={i.name}/>);
    });

    return (
        <div>
            {chainMap}
        </div>
    );
}

export default ChainList;