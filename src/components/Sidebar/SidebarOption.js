import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (

    <div className="sidebarOption" >
      <Icon />

      <NavLink className="sidebarOption--link"
        to={
          {
            pathname: `/${text}`
          }
        } >{text}</NavLink>

    </div >
  );
}

export default SidebarOption;
