import React from "react";
import { useState, useEffect } from "react";

const VideoCard = ({ video, escudo, nombre }) => {
    return (
        <div className="card bg-dark text-white border-0 rounded-0">
            <video src={video} className="card-video" autoPlay loop playsInline muted></video>
            <div className="card-img-overlay">
                <div className="row justify-content-start align-items-center h-100">
                    <div className="rounded-pill w-25 text-center bg-dark bg-opacity-75">
                        <img
                            src={escudo}
                            class="img-fluid rounded-top"
                            alt=""
                        />
                        <h4 className="card-title">{nombre}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VideoCard;