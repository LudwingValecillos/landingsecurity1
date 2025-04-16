import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/App.css";
import SecurityLandingPage from "./pages/SecurityLandinPage";
import IphonesLandingPage from "./pages/IphonesLandinPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/iphones" element={<IphonesLandingPage />} />

          <Route path="/security" element={<SecurityLandingPage />} />
          {/* <Route path="/" element={<HomePage />} />
           */}
          <Route path="/" element={<IphonesLandingPage />} />
          <Route path="*" element={<IphonesLandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
