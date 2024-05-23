import React from "react";
import {
  GitHubSVG,
  FrontEndMentorSVG,
  TwitterSVG,
  LinkedInSVG,
} from "./images";

export function TopHeader({ bgColor }) {
  return (
    <div className="top-header" style={{ backgroundColor: bgColor }}>
      <div className="top-header-content">
        <h2 className="top-name">adamkeyes</h2>
        <div className="top-social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubSVG className="svg-icon" />
            <span class="sr-only">Frontend Mentor</span>
          </a>
          <a
            href="https://frontendmentor.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FrontEndMentorSVG className="svg-icon" />
            <span class="sr-only">Frontend Mentor</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterSVG className="svg-icon" />
            <span class="sr-only">Frontend Mentor</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInSVG className="svg-icon" />
            <span class="sr-only">Frontend Mentor</span>
          </a>
        </div>
      </div>
    </div>
  );
}
