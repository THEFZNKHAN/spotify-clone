import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import LyricsIcon from "@mui/icons-material/Lyrics";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SpeakerGroupIcon from "@mui/icons-material/SpeakerGroup";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";

import "./songBar.css";

const SongBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

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

            <div className="center">
                <div className="op">
                    <ShuffleIcon className="shuffle-icon icon" />
                    <SkipPreviousIcon className="prev-icon icon" />
                    {isPlaying ? (
                        <PauseCircleFilledIcon
                            className="pause-icon icon"
                            onClick={togglePlayPause}
                        />
                    ) : (
                        <PlayCircleIcon
                            className="play-icon icon"
                            onClick={togglePlayPause}
                        />
                    )}
                    <SkipNextIcon className="next-icon icon" />
                    <RepeatOneIcon className="repeat-icon icon" />
                </div>
                <div className="slide-div">
                    <p>0:00</p>
                    <input type="range" className="slider" />
                    <p>5:00</p>
                </div>
            </div>

            <div className="right-side">
                <SlideshowIcon className="icon" />
                <LyricsIcon className="icon" />
                <QueueMusicIcon className="icon" />
                <SpeakerGroupIcon className="icon" />
                <VolumeUpIcon className="icon" />
                <input type="range" className="volume" />
                <PictureInPictureAltIcon className="icon" />
            </div>
        </div>
    );
};

export default SongBar;
