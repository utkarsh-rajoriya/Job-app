import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to <span className="brand">Jobs-Mania</span></h1>
        <p>Your one-stop platform for jobs and hiring talent!</p>
      </header>
      
      <main className="homepage-main">
        <button className="btn btn-primary" onClick={() =>{navigate("/getjob")}}>
          Get New Job
        </button>
        <button className="btn btn-secondary" onClick={() =>{navigate("/hire")}}>
          Hire New Talent
        </button>
      </main>
    </div>
  );
}
