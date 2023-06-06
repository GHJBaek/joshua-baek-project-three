import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchPlayerForm from './SearchPlayerForm';
import PlayerStats from './PlayerStats';
import logo from './NBA_logo.svg'

function App() {

  return (
    <div className="App">
      <h1>    <img src={logo} className="NBA-logo" alt="NBA logo" />     NBA Player Stats</h1>
      <Routes>
        <Route path='/' element={< SearchPlayerForm />} />
        <Route path='/playerStat/:playerID' element={<PlayerStats />} />
      </Routes>
    </div>
  );
}

export default App;
