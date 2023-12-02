import React from "react";

import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
    const div1Elements = [
        {
            img: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb99e4fca7c0b7cb166d915789/1/en/default",
            name: "Daily Mix 1",
        },
        {
            img: "https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea",
            name: "Album",
        },
        {
            img: "https://i.scdn.co/image/ab6761610000517456dbabf4922bb49ee790c3b1",
            name: "Talha Anjum",
        },
        {
            img: "https://i.scdn.co/image/ab67616d0000b273bf1744a2fefe51f199ff3874",
            name: "Dino James",
        },
        {
            img: "https://i.scdn.co/image/ab67706c0000da8454b133282efaec2a07cc05fc",
            name: "Eminem",
        },
        {
            img: "https://i.scdn.co/image/ab6761610000e5ebb508f66ab7a0128c1f9b5c56",
            name: "Rauf & Faik",
        },
    ];

    const div2Elements = [
        {
            img: "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb3bcef85e105dfc42399ef0ba/en",
            name: "Release Radar",
            folder: "Playlist",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_P5OdvcnoSeVpmv0wNCGV3CSbOaj3h7HNp8NVdZ9t2b9pBhi6OrP-ilzHSmOhTUPBls&usqp=CAU",
            name: "Girl in Red",
            folder: "Artist",
        },
        {
            img: "https://i.scdn.co/image/ab67706f00000002c30623cd54c7a127429e4678",
            name: "Hip Hop Mix",
            folder: "Drive slow homie. cover: Big Tymers<",
        },
        {
            img: "https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb3bcef85e105dfc42399ef0ba/en",
            name: "Release Radar",
            folder: "Playlist",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_P5OdvcnoSeVpmv0wNCGV3CSbOaj3h7HNp8NVdZ9t2b9pBhi6OrP-ilzHSmOhTUPBls&usqp=CAU",
            name: "Girl in Red",
            folder: "Artist",
        },
    ];

    return (
        <div className="home-div">
            <Navbar />

            <div className="div1">
                <div className="heading">
                    <h2>Good morning</h2>
                </div>
                <div className="song-elements">
                    {div1Elements.map((ele) => (
                        <div className="song-ele">
                            <img src={ele.img} alt={ele.name} />
                            <h4>{ele.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className="div2">
                <div className="heading">
                    <h2>Jump back in</h2>
                    <h4>Show all</h4>
                </div>
                <div className="elements">
                    {div2Elements.map((ele) => (
                        <div className="ele">
                            <img
                                src={ele.img}
                                alt={ele.name}
                                className={ele.folder === "Artist" ? "img" : ""}
                            />
                            <h3>{ele.name}</h3>
                            <h4>{ele.folder}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className="div2 div3">
                <div className="heading">
                    <h2>Only for you</h2>
                    <h4>Show all</h4>
                </div>
                <div className="elements">
                    {div2Elements.map((ele) => (
                        <div className="ele">
                            <img
                                src={ele.img}
                                alt={ele.name}
                                className={ele.folder === "Artist" ? "img" : ""}
                            />
                            <h3>{ele.name}</h3>
                            <h4>{ele.folder}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
