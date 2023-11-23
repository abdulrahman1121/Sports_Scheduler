import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./comps/Navbar";
import Content from "./comps/Content";
import LiveGames from "./comps/Livegames";
import Upcoming from "./comps/Upcoming";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        
        <Route path="/Livegames" element= {<LiveGames/>}></Route>
        <Route path="/Content" element= {<Content/>}></Route>
        <Route path="/Upcoming" element= {<Upcoming/>}></Route>
      </Routes>
    </>
  );
}

export default App;
