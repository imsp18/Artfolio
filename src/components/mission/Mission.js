import React from "react";
import "./mission.css";
import Union from "./assets/Union.svg";

function Mission() {
    return (
        <div className="title">
            OUR <span>MISSION</span>
            <div className="mission-container">
                <div className="imgtxt">
                    <img
                        src={Union}
                        style={{ marginRight: "187px" }}
                        alt="Union"
                    />

                    <div className="desc">
                        Fueling an entrepreneurial future, Artfolio unleashes creativity in a united community of artists. We nurture growth, collaboration, and recognition, with an innovative quiz leaderboard inspiring healthy competition and celebrating continuous learning. Join our vibrant artistic journey today.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;