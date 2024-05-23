import React from "react";

export function Section({ title, children }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-line"></div>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
