import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import "./sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true);

    const goToHome = () => {
        navigate("/spotify-clone");
        setIsActive(true);
    };

    const goToSearch = () => {
        navigate("/spotify-clone/search");
        setIsActive(false);
    };

    return (
        <div className="sidebar-div">
            <div className="top">
                <div
                    className={`home-btn ${isActive ? "active" : ""}`}
                    onClick={goToHome}
                >
                    <HomeIcon className="home-icon" />
                    <span>Home</span>
                </div>
                <div
                    className={`search-btn ${!isActive ? "active" : ""}`}
                    onClick={goToSearch}
                >
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

            <div className="bottom">
                <div className="bottom-head">
                    <SearchIcon className="search-icon" />
                    <FormatListBulletedIcon className="list-icon" />
                </div>
                <div className="bottom-body">
                    <div className="bb-element">
                        <img
                            src="https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea"
                            alt=""
                        />
                        <div className="pl-name">
                            <h3>Album</h3>
                            <p>
                                Playlist <b>.</b> Faizan
                            </p>
                        </div>
                    </div>
                    <div className="bottom-body">
                        <div className="bb-element">
                            <img
                                src="https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg"
                                alt=""
                            />
                            <div className="pl-name">
                                <h3>Favorites</h3>
                                <p>
                                    Playlist <b>.</b> Faizan
                                </p>
                            </div>
                        </div>
                        <div className="bb-element">
                            <img
                                src="https://i.scdn.co/image/ab67616d0000b273bf1744a2fefe51f199ff3874"
                                alt=""
                            />
                            <div className="pl-name">
                                <h3>Dino James</h3>
                                <p>Artist</p>
                            </div>
                        </div>
                        <div className="bb-element">
                            <img
                                src="https://i.scdn.co/image/ab67706c0000da8454b133282efaec2a07cc05fc"
                                alt=""
                            />
                            <div className="pl-name">
                                <h3>Eminem</h3>
                                <p>Artist</p>
                            </div>
                        </div>
                        <div className="bb-element">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhuIypUWqkXHFxXn0jcZHps-lP6qzUkhAGA&usqp=CAU"
                                alt=""
                            />
                            <div className="pl-name">
                                <h3>Relaxation</h3>
                                <p>
                                    Playlist <b>.</b> Faizan
                                </p>
                            </div>
                        </div>
                        <div className="bb-element">
                            <img
                                src="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
                                alt=""
                            />
                            <div className="pl-name">
                                <h3>Weekend</h3>
                                <p>Artist</p>
                            </div>
                        </div>
                        <div className="bb-element">
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e02ba071b7b2ffb03ccb472425d"
                                alt=""
                            />
                            <div className="pl-name">
                                <h3>Arjit Singh</h3>
                                <p>Artist</p>
                            </div>
                        </div>
                        <div className="bb-element">
                            <img
                                src="https://i.scdn.co/image/ab67616d0000b273fac61ec6ab51254a1a4ee6b1"
                                alt=""
                            />
                            <div className="pl-name">
                                <h3>Soundtrack</h3>
                                <p>
                                    Playlist <b>.</b> Spotify
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
