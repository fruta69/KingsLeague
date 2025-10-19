
import React from "react";
import { useState, useEffect } from "react";
import TeamCard from "./TeamCard.jsx";
import { fetchTeams } from '../services/teamService.js';

const TeamList = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        
        fetchTeams()
            .then((teamsData) => {
                setTeams(teamsData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="container">
        <div className="row justify-content-center p-3 w-100 bg-warning-subtle m-0">
            
            {teams.map((team) =>(
                <TeamCard key={team.id} team={team} />
            ))}
        </div>
        </div>
    );
};
export default TeamList;