import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchPlayerForm() {

    const [playerName, setPlayerName] = useState('');
    const [player, setPlayer] = useState([]);


    useEffect(() => {

        if (playerName) {
            axios({
                url: 'https://free-nba.p.rapidapi.com/players',
                method: 'GET',
                params: {
                    page: '1',
                    search: playerName
                },
                headers: {
                    'X-RapidAPI-Key': 'edfe4dc115msh1dee64a40001ac3p1d2bcbjsnb8d4a9244952',
                    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
                }
            }).then((res) => {
                // update state using the array returned to us from the API
                const playerData = res.data.data;
                setPlayer(playerData);
                console.log(playerData);
            })
        }

    }, [playerName]);


    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayerName('');

    };

    return (
        <div className="SearchPlayer">

            <form action="" className='form'>
                <label htmlFor="playerName">Search for a player </label>
                <input
                    id='playerName'
                    value={playerName}
                    onChange={handleInputChange}
                    type="text" placeholder="Search for a player"
                />
                <button
                    type="submit"
                    onClick={handleSubmit}>Search</button>
            </form>

            <table className="player-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Conference</th>

                    </tr>
                </thead>
                <tbody>
                    {player.map((player) => (

                        <tr key={player.id}>
                            <td>{player.id}</td>
                            <Link to={`/playerStat/${player.id}`}>
                                <td>{player.first_name} {player.last_name}</td>
                            </Link>
                            <td>{player.position ?? '-'}</td>
                            <td>{player.team.full_name ?? '-'}</td>
                            <td>{player.team.conference ?? '-'}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchPlayerForm;