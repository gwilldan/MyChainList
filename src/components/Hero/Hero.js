import React from 'react';
import "./Hero.css";
import ChainListLogo from "../../Images/ChainListLogo.svg"


function Hero(props) {
    return (
        <div className='Hero'>
            <div className='Hero__Container'>
                <img src={ChainListLogo} alt="Logo" />
                <h2> Helping Users connect to the Evm powered networks</h2>
                <h3>Chainlist is a list of EVM networks. Users can use the information to connect their wallets and Web3 middleware providers to the appropriate Chain ID and Network ID to connect to the correct chain.</h3>
                <button className='button button1'>Add Your Network</button>
                <button className='button'>Add Your Network</button>
                <h4>View Code</h4>
            </div>
        </div>
    );
}

export default Hero;