import React from "react";
import {
    ArrowForwardIosOutlined,
    ArrowBackIosNewOutlined,
    PermIdentityOutlined,
    Downloading,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useLocation } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar-div">
            <div className="leftSide">
                <ArrowBackIosNewOutlined className="icons" />
                <ArrowForwardIosOutlined className="icons" />

                {location.pathname === "/spotify-clone/search" && (
                    <div className="search">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="What do you want to listen to?"
                        />
                    </div>
                )}
            </div>

            <div className="rightSide">
                {location.pathname === "/spotify-clone" && (
                    <span className="ep-btn">Explore Premium</span>
                )}
                <div className="download-btn">
                    <Downloading />
                    <span>Install App</span>
                </div>
                <NotificationsNoneOutlinedIcon className="icons" />
                <PermIdentityOutlined className="id-icons" />
            </div>
        </div>
    );
};

export default Navbar;
