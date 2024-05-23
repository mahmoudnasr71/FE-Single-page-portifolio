import React from "react";

export function Section({ title, children }) {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-line"></div>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
