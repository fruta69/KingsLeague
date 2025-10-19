import { useParams } from 'react-router-dom';
import React from "react";
import { useState, useEffect } from "react";
import { fetchPlayersByTeam, fetchTeamInfo } from '../services/playerService.js';
import PlayerCard from "./PlayerCard.jsx";
import VideoCard from "./VideoCard.jsx";

const PlayerList = () => {
    const { teamId } = useParams();
    const [players, setPlayers] = useState([]);
    const [team, setTeam] = useState(null);
    useEffect(() => {
        fetchPlayersByTeam(teamId)
            .then((playersData) => {
                setPlayers(playersData);
            })
            .catch((err) => {
                console.log(err.message);
            });
        fetchTeamInfo(teamId)
            .then((teamData) => {
                setTeam(teamData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [teamId]);

    if (!team || players.length === 0) {
        return (<div>Loading team information...</div>)
    }
    return (
        <div className="container">
        <div className="bg-warning bg-opacity-50">
            <VideoCard video={team.video} escudo={team.escudo} nombre={team.nombre} />
            <div className="row justify-content-center">
                <PlayerCard key="presidente" player={{ nombre: team.nombrepresidente, demarcacion: "Presidente", imagen: team.imagenpresidente }} />
            </div>
            <div className="row">
                <PlayerCard key="entrenador" player={{ nombre: team.nombreentrenador, demarcacion: "Entrenador", imagen: team.imagenentrenador }} />
                {players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
        </div>
    );

};
export default PlayerList;
