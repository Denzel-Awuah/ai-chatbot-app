import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import ChatBotApp from "./Components/ChatBotApp";
import ImageGenApp  from "./Components/ImageGenApp";

import "./App.css";

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ChatBotApp />} />
        <Route path="/imageGeneration" element={<ImageGenApp /> } />
      </Routes>
    </>
  );
}

export default App;
