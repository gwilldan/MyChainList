import './App.css';
import {Hero, ChainList, ChainSearch} from "./components/CompIndex";

function App() {
  return (
    <div className="App">
      
      <div className='App__Hero'>
        <Hero />
      </div>

      <div className='App__Scroll'>
        <div className='App__Scroll-Search'><ChainSearch /></div>
        <ChainList />
      </div>
    </div>
  );
}

export default App;
