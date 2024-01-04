import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./comps/Navbar";
import Content from "./comps/Content";
import LiveGames from "./comps/Livegames";
import Upcoming from "./comps/Upcoming";
import NBA from "./comps/NBA";
import NFL from "./comps/NFL";
import MLB from "./comps/MLB";
import Soccer from "./comps/Soccer";
import NHL from "./comps/NHL";
import Home from "./comps/Home";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/Livegames" element={<LiveGames />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/NBA" element={<NBA />} />
        <Route path="/NFL" element={<NFL />} />
        <Route path="/NHL" element={<NHL />} />
        <Route path="/MLB" element={<MLB />} />
        <Route path="/Soccer" element={<Soccer />} /> 
      </Routes>
    </>
  );
}

export default App;
