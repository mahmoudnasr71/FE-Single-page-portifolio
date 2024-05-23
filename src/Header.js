import React from "react";
import profileImage from "./images/image-profile-desktop.webp";
import profileImageTablet from "./images/image-profile-tablet.webp";
import profileImageMobile from "./images/image-profile-mobile.webp";
import { CircleRing } from "./CircleRing";
import { DecorativeRing } from "./DecorativeRing";
import { ContactButton } from "./ContactButton";

export function Header({ isMobile, isMobile2 }) {
  const getImage = (large, tablet, mobile) => {
    if (isMobile2) return mobile;
    if (isMobile) return tablet;
    return large;
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-image-wrapper">
          <img
            src={getImage(profileImage, profileImageTablet, profileImageMobile)}
            alt="profile"
            className="profile-image"
          />
          <CircleRing className="circle-ring" />
        </div>
        <div className="header-text">
          <h1>
            Nice to <br className="mobile-break" /> meet you!{" "}
            <br className="desktop-break" /> I'm <br className="mobile-break" />{" "}
            <span className="green">Adam Keyes.</span>
          </h1>
          <div className="decorative-ring-wrapper">
            <DecorativeRing className="decorative-ring" />
          </div>
          <p className="header-description">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <ContactButton
            text="CONTACT ME"
            marginTop="66px"
            marginBottom="230px"
          />
        </div>
      </div>
    </header>
  );
}
