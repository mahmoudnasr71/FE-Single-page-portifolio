import React from "react";
import { ContactButton } from "./ContactButton";

export function Project({
  title,
  description1,
  description2,
  description3,
  img,
  showOverlay,
  isMobile2,
}) {
  return (
    <div className="project" onClick={() => showOverlay({ title })}>
      <div className="project-image-wrapper">
        <img className="project-image" src={img} alt={title} />
        {!isMobile2 && (
          <div className="overlay">
            <ContactButton text="VIEW PROJECT" marginBottom={"48px"} />
            <ContactButton text="VIEW CODE" />
          </div>
        )}
      </div>
      <h3 className="project-title">{title}</h3>
      <div className="project-description-container">
        <p className="project-description">{description1}</p>
        <p className="project-description">{description2}</p>
        <p className="project-description">{description3}</p>
      </div>
      {isMobile2 && (
        <div className="button-container">
          <ContactButton text="VIEW PROJECT" marginBottom="0" />
          <ContactButton text="VIEW CODE" marginBottom="0" />
        </div>
      )}
    </div>
  );
}
