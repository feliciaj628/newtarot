import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import TarotReadings from "./pages/TarotReadings";
import OracleDecks from "./pages/OracleDecks";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/blog" exact element={<Blog />} />
          <Route path="/tarotreadings" exact element={<TarotReadings />} />
          <Route path="/oracledecks" exact element={<OracleDecks />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/FAQ" exact element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
