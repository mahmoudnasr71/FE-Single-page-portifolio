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
        <div className="top-name">adamkeyes</div>
        <div className="top-social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubSVG className="svg-icon" />
          </a>
          <a
            href="https://frontendmentor.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FrontEndMentorSVG className="svg-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterSVG className="svg-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInSVG className="svg-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
