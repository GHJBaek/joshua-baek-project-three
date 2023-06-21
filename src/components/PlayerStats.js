import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function PlayerStats() {

    // store api data in state
    const [playerStat, setPlayerStat] = useState([]);
    // fetch data from API
    useEffect(() => {

        axios({
            url: 'https://ghjbaek.github.io/NBA-API/NBA-API.json',
            method: 'GET',

        }).then((res) => {
            // update state using the array returned to us from the API
            const playerStatistic = res.data;
            setPlayerStat(playerStatistic);

        })

    }
        , []);

    const handleSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });


    const sortedData = () => {
        const { key, direction } = sortConfig;
        if (key) {
            return [...playerStat].sort((a, b) => {
                if (direction === "ascending") {
                    return a[key] - b[key];
                } else {
                    return b[key] - a[key];
                }
            });
        }
        return playerStat;
    };

    const sortedPlayerStat = sortedData();


    return (



        <div className="PlayerStat">

            <table className="player-table">
                <thead>
                    <tr>
                        <th onClick={() => handleSort("player")}>Player</th>
                        <th onClick={() => handleSort("pts")}>Points</th>
                        <th onClick={() => handleSort("ast")}>Assists</th>
                        <th onClick={() => handleSort("fg3_pct")}>3P%</th>
                        <th onClick={() => handleSort("fg_pct")}>FG%</th>
                        <th onClick={() => handleSort("ft_pct")}>FT%</th>
                        <th onClick={() => handleSort("blk")}>Blocks</th>
                        <th onClick={() => handleSort("trb")}>Rebounds</th>
                        <th onClick={() => handleSort("stl")}>Steals</th>
                        <th onClick={() => handleSort("season")}>Season</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map data through columns */}
                    {playerStat.map((stats) => (
                        <tr >
                            <td>{stats.player ?? '0'}</td>
                            <td>{stats.pts ?? '0'}</td>
                            <td>{stats.ast ?? '0'}</td>
                            <td>{stats.fg3_pct ?? '-'}</td>
                            <td>{stats.fg_pct ?? '-'}</td>
                            <td>{stats.ft_pct ?? '-'}</td>
                            <td>{stats.blk ?? '0'}</td>
                            <td>{stats.trb ?? '0'}</td>
                            <td>{stats.stl ?? '0'}</td>
                            <td>{stats.season ?? '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>




        </div>

    );
}

export default PlayerStats;
