import React from 'react';
import "./Hero.css";
import ChainListLogo from "../../Images/ChainListLogo.svg"
import {FaGithub, FaPlus} from "react-icons/fa"

function Hero(props) {
    return (
        <div className='Hero'>
            <div className='Hero__Container'>
                <img className="svg" src={ChainListLogo} alt="Logo" />
                <h2> Helping users connect to the EVM powered networks</h2>
                <h3>Chainlist is a list of EVM networks. Users can use the information to connect their wallets and Web3 middleware providers to the appropriate Chain ID and Network ID to connect to the correct chain.</h3>
                <button className='button   button1'>Add Your Network<FaPlus className='cross'/></button>
                <button className='button button2'>Add Your RPC <FaPlus className='cross'/></button>
                <a href = "https://github.com/gwilldan/MyChainList" target="blank" className='Hero__Container-git'><FaGithub className='gitIcon' /><h4>View Code</h4></a>
            </div>
        </div>
    );
}

export default Hero;