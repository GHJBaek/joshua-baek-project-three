import './App.css';
import { Route, Routes } from 'react-router-dom';
import PlayerStats from './components/PlayerStats';
import logo from './components/assets/Fantasy Moneyball-transaparent-whitetext-crop.png'


function App() {

  
  return (
    <div className="App">
      <h1>    <img src={logo} className="logo" alt="Fantasy Moneyball logo" /></h1>
      <Routes>
        <Route path="/" element={<PlayerStats />} />
      </Routes>

    </div>
  );
}

export default App;
