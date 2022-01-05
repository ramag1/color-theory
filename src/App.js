import logo from './logo.svg';
import './App.css';
import Triad from './components/Triad';
import Quad from './components/Quad';
import Analogic from './components/Analogic';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Triad />
      <Quad />
      <Analogic />
      <Home />

    </div>
  );
}

export default App;
