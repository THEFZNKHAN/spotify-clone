import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar-div">
            <div className="top">
                <div className="home-btn">
                    <HomeIcon className="home-icon" />
                    <span>Home</span>
                </div>
                <div className="search-btn">
                    <SearchIcon className="search-icon" />
                    <span>Search</span>
                </div>
            </div>

            <div className="middle">
                <div className="lib-head">
                    <div className="lib-side">
                        <LibraryMusicIcon className="music-icon" />
                        <span>Your Library</span>
                    </div>
                    <div className="lib-rs">
                        <AddIcon className="app-icon" />
                        <ArrowForwardIcon className="arrow-icon" />
                    </div>
                </div>

                <div className="lib-keyword">
                    <span className="playlist-span">Playlists</span>
                    <span className="podcasts-span">Podcasts & Shows</span>
                </div>
            </div>

            <div className="bottom"></div>
        </div>
    );
};

export default Sidebar;
