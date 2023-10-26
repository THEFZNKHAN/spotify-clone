import React from "react";

import "./home.css";

const Home = () => {
    return (
        <div className="home-div">
            <div className="div1">
                <div className="heading">
                    <h2>Good morning</h2>
                </div>
                <div className="song-elements">
                    <div className="song-ele">
                        <img
                            src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb99e4fca7c0b7cb166d915789/1/en/default"
                            alt=""
                        />
                        <h4>Daily Mix 1</h4>
                    </div>
                    <div className="song-ele">
                        <img
                            src="https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea"
                            alt=""
                        />
                        <h4>Album</h4>
                    </div>
                    <div className="song-ele">
                        <img
                            src="https://i.scdn.co/image/ab6761610000517456dbabf4922bb49ee790c3b1"
                            alt=""
                        />
                        <h4>Talha Anjum</h4>
                    </div>
                    <div className="song-ele">
                        <img
                            src="https://i.scdn.co/image/ab67616d0000b273bf1744a2fefe51f199ff3874"
                            alt=""
                        />
                        <h4>Dino James</h4>
                    </div>
                    <div className="song-ele">
                        <img
                            src="https://i.scdn.co/image/ab67706c0000da8454b133282efaec2a07cc05fc"
                            alt=""
                        />
                        <h4>Eminem</h4>
                    </div>
                    <div className="song-ele">
                        <img
                            src="https://i.scdn.co/image/ab6761610000e5ebb508f66ab7a0128c1f9b5c56"
                            alt=""
                        />
                        <h4>Rauf & Faik</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
