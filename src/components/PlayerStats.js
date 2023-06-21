
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function PlayerStats() {
    const [playerStat, setPlayerStat] = useState([]);
    // store the key and direction of the sort
    const [sortConfig, setSortConfig] = useState({
        key: "",
        direction: "",
    });

    useEffect(() => {
        axios({
            url: "https://ghjbaek.github.io/NBA-API/NBA-API.json",
            method: "GET",
        }).then((res) => {
            const playerStatistic = res.data;
            setPlayerStat(playerStatistic);
        });
    }, []);
    // handleSort function will determine the direction of the sort
    const handleSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };
    // sortedData function will sort the data based on the key and direction
    const sortedData = () => {
        const { key, direction } = sortConfig;
        const sortedPlayerStat = [...playerStat];
        if (key) {
            sortedPlayerStat.sort((a, b) => {
                if (direction === "ascending") {
                    return a[key] - b[key];
                } else {
                    return b[key] - a[key];
                }
            });
        }
        return sortedPlayerStat;
    };

    const renderTableHeader = () => {
        const headers = [
            { key: "player", label: "Player" },
            { key: "pts", label: "Points" },
            { key: "ast", label: "Assists" },
            { key: "fg3_pct", label: "3P%" },
            { key: "fg_pct", label: "FG%" },
            { key: "ft_pct", label: "FT%" },
            { key: "blk", label: "Blocks" },
            { key: "trb", label: "Rebounds" },
            { key: "stl", label: "Steals" },
            { key: "season", label: "Season" },
        ];

        return (
            <tr>
                {headers.map((header) => (
                    <th
                        key={header.key}
                        onClick={() => handleSort(header.key)}
                        className={sortConfig.key === header.key ? sortConfig.direction : ""}
                    >
                        {header.label}
                    </th>
                ))}
            </tr>
        );
    };

    const renderTableBody = () => {
        const sortedPlayerStat = sortedData();

        return sortedPlayerStat.map((stats) => (
            <tr key={stats.playerID}>
                <td>{stats.player ?? "0"}</td>
                <td>{stats.pts ?? "0"}</td>
                <td>{stats.ast ?? "0"}</td>
                <td>{stats.fg3_pct ?? "-"}</td>
                <td>{stats.fg_pct ?? "-"}</td>
                <td>{stats.ft_pct ?? "-"}</td>
                <td>{stats.blk ?? "0"}</td>
                <td>{stats.trb ?? "0"}</td>
                <td>{stats.stl ?? "0"}</td>
                <td>{stats.season ?? "-"}</td>
            </tr>
        ));
    };

    return (
        <div className="PlayerStat">
            <table className="player-table">
                <thead>{renderTableHeader()}</thead>
                <tbody>{renderTableBody()}</tbody>
            </table>
        </div>
    );
}

export default PlayerStats;