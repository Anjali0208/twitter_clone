import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Sidebar/Home";
import Explore from "./components/Sidebar/Explore";
import Bookmark from "./components/Sidebar/Bookmark";
import Notification from "./components/Sidebar/Notification";
import Messages from "./components/Sidebar/Messages";
import Lists from "./components/Sidebar/Lists";
import Profile from "./components/Sidebar/Profile";
import More from "./components/Sidebar/More";



function App() {
  return (
    // BEM
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/more" element={<More />} />
          <Route />
        </Routes>
        <Widgets />
      </div>
    </BrowserRouter>


  );
}

export default App;
