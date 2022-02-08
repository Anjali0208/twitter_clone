import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";


function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />


      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>

    </div >
  );
}

export default Sidebar;











//       <SidebarOption active Icon={HomeIcon} text="Home" />  
//        <SidebarOption Icon={SearchIcon} text="Explore" />
//         <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
//         <SidebarOption Icon={MailOutlineIcon} text="Messages" />
//         <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
//         <SidebarOption Icon={ListAltIcon} text="Lists" />
//         <SidebarOption Icon={PermIdentityIcon} text="Profile" />
//         <SidebarOption Icon={MoreHorizIcon} text="More" /> 



// <NavLink to="/" Icon={HomeIcon} className="sidebar__link" activeClassName="sidebar__link--active">Home</NavLink>
//       <NavLink to="/explore" className="sidebar__link">Explore</NavLink>
//       <NavLink to="/notification" className="sidebar__link">Notification</NavLink>
//       <NavLink to="/message" className="sidebar__link">Messages</NavLink>
//        <NavLink to="/bookmark" className="sidebar__link">Bookmark</NavLink> 
//       <NavLink to="/list" className="sidebar__link">Lists</NavLink>
//     <NavLink to="/profile" className="sidebar__link">Profile</NavLink> 
