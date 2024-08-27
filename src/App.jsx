// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import "./App.css";

import Exercise01 from "./exercises/Exercise01";
import Exercise02 from "./exercises/Exercise02";
import Exercise03 from "./exercises/Exercise03";
import Exercise04 from "./exercises/Exercise04";
import Exercise05 from "./exercises/Exercise05";
import Exercise06 from "./exercises/Exercise06";
import Exercise07 from "./exercises/Exercise07";
import Exercise08 from "./exercises/Exercise08";
import Exercise09 from "./exercises/Exercise09";
import Exercise10 from "./exercises/Exercise10";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main>
          <section className="grid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise1" element={<Exercise01 />} />
              <Route path="/exercise2" element={<Exercise02 />} />
              <Route path="/exercise3" element={<Exercise03 />} />
              <Route path="/exercise4" element={<Exercise04 />} />
              <Route path="/exercise5" element={<Exercise05 />} />
              <Route path="/exercise6" element={<Exercise06 />} />
              <Route path="/exercise7" element={<Exercise07 />} />
              <Route path="/exercise8" element={<Exercise08 />} />
              <Route path="/exercise9" element={<Exercise09 />} />
              <Route path="/exercise10" element={<Exercise10 />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;
