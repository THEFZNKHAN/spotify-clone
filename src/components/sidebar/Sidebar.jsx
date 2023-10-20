import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar-div">
            <div className="home-btn">
                <HomeIcon className="home-icon"/>
                <span>Home</span>
            </div>
            <div className="search-btn">
                <SearchIcon className="search-icon" />
                <span>Search</span>
            </div>
        </div>
    );
};

export default Sidebar;
