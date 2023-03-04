import './App.css';
import {ChainTiles, Hero, TilesContainer} from "./components/CompIndex";

function App() {
  return (
    <div className="App">
      <Hero />
      <TilesContainer />
      <ChainTiles />
    </div>
  );
}

export default App;
