import React, { useState } from "react";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project1small,
  project2small,
  project3small,
  project4small,
  project5small,
  project6small,
} from "./images";
import { Project } from "./Project";
import { ContactButton } from "./ContactButton";

export function Projects({ isMobile, isMobile2 }) {
  const [overlay, setOverlay] = useState({ visible: false, project: null });

  const showOverlay = (project) => {
    setOverlay({ visible: true, project });
  };

  const getImage = (large, small) => {
    return isMobile ? small : large;
  };

  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="section-title">Projects</h1>
        <ContactButton marginTop="0" marginBottom="0" text="CONTACT ME" />
      </div>

      <div className="projects-list">
        <Project
          title="Design Portfolio"
          description1="HTML"
          description2="CSS"
          img={getImage(project1, project1small)}
          showOverlay={showOverlay}
          isMobile2={isMobile2}
        />
        <Project
          title="E-Learning Landing Page"
          description1="HTML"
          description2="CSS"
          img={getImage(project2, project2small)}
          showOverlay={showOverlay}
          isMobile2={isMobile2}
        />
        <Project
          title="Todo Web App"
          description1="HTML"
          description2="CSS"
          description3="JS"
          img={getImage(project3, project3small)}
          showOverlay={showOverlay}
          isMobile2={isMobile2}
        />
        <Project
          title="Entertainment Web App"
          description1="HTML"
          description2="CSS"
          description3="JS"
          img={getImage(project4, project4small)}
          showOverlay={showOverlay}
          isMobile2={isMobile2}
        />
        <Project
          title="Memory Game"
          description1="HTML"
          description2="CSS"
          description3="JS"
          img={getImage(project5, project5small)}
          showOverlay={showOverlay}
          isMobile2={isMobile2}
        />
        <Project
          title="Art Gallery Showcase"
          description1="HTML"
          description2="CSS"
          description3="JS"
          img={getImage(project6, project6small)}
          showOverlay={showOverlay}
          isMobile2={isMobile2}
        />
      </div>

      {/* Hidden element to use overlay state */}
      {overlay.visible && (
        <div style={{ display: "none" }}>
          Overlay is visible for project: {overlay.project?.title}
        </div>
      )}
    </div>
  );
}
