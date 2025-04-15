import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/App.css";
import SecurityLandingPage from "./pages/SecurityLandinPage";
import IphonesLandingPage from "./pages/IphonesLandinPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/iphones" element={<IphonesLandingPage />} />

          <Route path="/security" element={<SecurityLandingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
