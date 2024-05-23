import React from "react";
import { DecorativeRing } from "./DecorativeRing";
import { Section } from "./Section";
import { Skill } from "./Skill";

export function Skills() {
  return (
    <Section>
      <div className="skills-list">
        <Skill name="HTML" experience="4 Years Experience" />
        <Skill name="CSS" experience="4 Years Experience" />
        <Skill name="JavaScript" experience="4 Years Experience" />
        <Skill name="Accessibility" experience="4 Years Experience" />
        <Skill name="React" experience="3 Years Experience" />
        <Skill name="Sass" experience="3 Years Experience" />
        <DecorativeRing className="decorative-ring-skills" />
        <div className="section-line section-line-skills"></div>
      </div>
    </Section>
  );
}
