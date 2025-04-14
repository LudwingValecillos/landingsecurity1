import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/App.css";
import SecurityLandingPage from "./components/SecurityLandinPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/security" element={<SecurityLandingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome!</h1>
      <Link to="/security"><button>Go to Security Page</button></Link>
    </div>
  );
}

export default App;
