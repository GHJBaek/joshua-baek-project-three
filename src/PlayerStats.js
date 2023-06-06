// PlayerStats.js
import './PlayerStats.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PlayerStats() {

    const { playerID } = useParams();
    const [playerStat, setPlayerStat] = useState([]);


    useEffect(() => {

        axios({
            url: 'https://free-nba.p.rapidapi.com/stats',
            method: 'GET',
            params: {
                
                page: '0',
                // use the player id that has been clicked in SearchPlayerForm.js
                player_ids: playerID


            },
            headers: {
                'X-RapidAPI-Key': 'edfe4dc115msh1dee64a40001ac3p1d2bcbjsnb8d4a9244952',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        }).then((res) => {
            // update state using the array returned to us from the API
            const playerStatistic = res.data.data;
            setPlayerStat(playerStatistic);
            console.log(res.data.data.player);

        })

    }
        , [playerID]);





    return (

        <div className="PlayerStat">
            <table className="player-table">
                <thead>
                    <tr>
                        <th>Points</th>
                        <th>Assists</th>
                        <th>3P%</th>
                        <th>FG%</th>
                        <th>FT%</th>
                        <th>Blocks</th>
                        <th>Rebounds</th>
                        <th>Steals</th>
                        <th>Season</th>
                    </tr>
                </thead>
                <tbody>
                    {playerStat.map((stats) => (
                        <tr key={stats.id}>
                            <td>{stats.pts ?? '0'}</td>
                            <td>{stats.ast ?? '0'}</td>
                            <td>{stats.fg3_pct ?? '-'}</td>
                            <td>{stats.fg_pct ?? '-'}</td>
                            <td>{stats.ft_pct ?? '-'}</td>
                            <td>{stats.blk ?? '0'}</td>
                            <td>{stats.reb ?? '0'}</td>
                            <td>{stats.stl ?? '0'}</td>
                            <td>{stats.game.season ?? '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>




        </div>
    )
}

export default PlayerStats;