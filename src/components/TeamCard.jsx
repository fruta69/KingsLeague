import React from "react";
import { Link } from 'react-router-dom';

const TeamCard = ({ team }) => {
    return (
        <div className="col-lg-4 col-md-6 p-3">
            <Link to={`/team/${team.id}/players`}>
                <div className="card bg-dark text-white p-0">
                    <img className="card-img" src={team.poster}
                        alt="Title" />
                    <div className="card-img-overlay">
                        <div className="row h-50">
                            <div className="col">
                                <h4 className="card-title  bg-dark bg-opacity-50">{team.nombre}</h4>
                            </div>
                            <div className="col h-100 text-end">
                                <img src={team.escudo}
                                    className="img-fluid h-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default TeamCard;