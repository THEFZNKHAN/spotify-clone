import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./songBar.css";

const SongBar = () => {
    return (
        <div className="songBar-div">
            <div className="song-info">
                <div className="song-img">
                    <img
                        src="https://i.scdn.co/image/ab67616d0000b27368c08c2b4afb0e2b25140ad9"
                        alt=""
                    />
                </div>
                <div className="song-info-text">
                    <h4>My Head & My Heart</h4>
                    <p>Ava Max</p>
                </div>
                <FavoriteBorderIcon className="fav-icon" />
            </div>
        </div>
    );
};

export default SongBar;
