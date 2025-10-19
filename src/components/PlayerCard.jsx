import React from "react";

const PlayerCard = ({ player }) => {
    return (
        <div className="col-lg-4 col-md-6 p-3">
            <div className="card bg-dark text-white h-100">
                <img className="card-img-top h-100" src={player.imagen} alt={player.nombre} />
                <div className="card-body text-center">
                    <h4 className="card-title bg-warning bg-opacity-50">{player.nombre}</h4>
                    <p className="card-text bg-warning bg-opacity-25">{player.demarcacion}</p>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
