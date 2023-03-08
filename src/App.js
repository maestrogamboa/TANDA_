import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/css/tellus.css';
import Landing from "./components/Landing";
import TellUsMore from "./components/TellUsMore";
import Signup from "./components/Signup";
import AddParticipantsCopy from "./components/AddParticipantsCopy";
import DashBoard from "./components/DashBoard";
import auth0 from 'auth0-js';

export default function app() {

  let webAuthLogOut = new auth0.WebAuth({
    domain: process.env.REACT_APP_DOMAIN,
    clientID: process.env.REACT_APP_CLIENT_ID,
    redirectUri: 'http://localhost:3000',
    
  });
  let webAuthLogIn = new auth0.WebAuth({
    domain: process.env.REACT_APP_DOMAIN,
    clientID: process.env.REACT_APP_CLIENT_ID,
    redirectUri: 'http://localhost:3000/dashboard',
    responseType: 'token'
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landing webAuthLogIn={webAuthLogIn}/>}/>
          <Route path="/tellusmore" element={<TellUsMore/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/addparticipants" element={<AddParticipantsCopy/>}/>
          <Route path="/dashboard" element={<DashBoard webAuthLogOut={webAuthLogOut}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
