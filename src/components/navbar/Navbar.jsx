import React from "react";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosNewOutlined,
  PermIdentityOutlined,
  Downloading,
} from "@mui/icons-material";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="leftSide">
        <ArrowBackIosNewOutlined />
        <ArrowForwardIosOutlined />
      </div>
      <div className="rightSide">
        <span>Explore Premium</span>
        <div>
          <Downloading />
          <span>Install App</span>
        </div>
        <PermIdentityOutlined />
      </div>
    </>
  );
};

export default Navbar;
