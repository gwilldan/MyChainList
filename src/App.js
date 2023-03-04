import './App.css';
import {Hero, ChainTiles, ChainSearch} from "./components/CompIndex";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className='App__Scroll'>
        <div className='App__Scroll-Search'><ChainSearch /></div>
        <ChainTiles />
      </div>
    </div>
  );
}

export default App;
