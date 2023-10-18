import React from "react";
import {
    ArrowForwardIosOutlined,
    ArrowBackIosNewOutlined,
    PermIdentityOutlined,
    Downloading,
} from "@mui/icons-material";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-div">
            <div className="leftSide">
                <ArrowBackIosNewOutlined className="icons" />
                <ArrowForwardIosOutlined className="icons" />
            </div>
            <div className="rightSide">
                <span className="ep-btn">Explore Premium</span>
                <div className="download-btn">
                    <Downloading className="icons" />
                    <span>Install App</span>
                </div>
                <NotificationsNoneOutlinedIcon className="icons" />
                <PermIdentityOutlined className="id-icons" />
            </div>
        </div>
    );
};

export default Navbar;
