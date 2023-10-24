import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import LyricsIcon from "@mui/icons-material/Lyrics";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SpeakerGroupIcon from "@mui/icons-material/SpeakerGroup";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";

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
                <div className="icon">
                    <FavoriteBorderIcon className="fav-icon" />
                </div>
            </div>

            <div className="right-side">
                <SlideshowIcon className="icon" />
                <LyricsIcon className="icon" />
                <QueueMusicIcon className="icon" />
                <SpeakerGroupIcon className="icon" />
                <VolumeUpIcon className="icon" />
                <PictureInPictureAltIcon className="icon" />
            </div>
        </div>
    );
};

export default SongBar;
