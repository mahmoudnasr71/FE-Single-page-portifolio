import React from "react";

export function Skill({ name, experience }) {
  return (
    <div className="skill">
      <h3>{name}</h3>
      <p>{experience}</p>
    </div>
  );
}
