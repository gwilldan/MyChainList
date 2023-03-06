import React, {useState} from 'react';
import './App.css';
import {Hero, ChainList, ChainSearch} from "./components/CompIndex";
import ChainArray from "./Data/ChainArray"


function App() {

  const [chainData, addChainData] = useState(ChainArray);
  const [newData, addNewData] = useState(chainData);

  return (
    <div className="App">
      
      <div className='App__Hero'>
        <Hero />
      </div>

      <div className='App__Scroll'>
        
        <div className='App__Scroll-Search'><ChainSearch chainData={chainData} addChainData={addChainData} newData={newData} addNewData={addNewData} /></div>

        <ChainList newData={newData} />

      </div>
    </div>
  );
}

export default App;
