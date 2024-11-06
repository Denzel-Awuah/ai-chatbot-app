import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import ChatBotApp from "./Pages/ChatBotApp";
import ImageGenApp  from "./Pages/ImageGenApp";

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
