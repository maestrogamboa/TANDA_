import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/css/tellus.css';
import Landing from "./components/Landing";
import TellUsMore from "./components/TellUsMore";
import Signup from "./components/Signup";
import AddParticipantsCopy from "./components/AddParticipantsCopy";
import DashBoard from "./components/DashBoard";

export default function app() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landing/>}/>
          <Route path="/tellusmore" element={<TellUsMore/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/addparticipants" element={<AddParticipantsCopy/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
