import React from "react";
import "./Card.css"; // Optional: Add custom styles here

export default function Card(props) {
  return (
    <div className="card border-2 border-primary shadow-sm" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body">
        <h5 className="card-title text-primary">{props.profile}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
        <p className="card-text">Experience: {props.experience} years</p>
        <div className="tech-stack">
          {props.tech.map((e, index) => (
            <span key={index} className="badge bg-secondary me-1">
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
