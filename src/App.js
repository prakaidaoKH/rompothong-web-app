import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ResortInfoApp from "./pages/ResortInfoApp";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResortInfoApp />
        {/*<BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
         {/*<Home /> Call use home page (Home.js) */}
      </header>
    </div>
  );
}

export default App;
