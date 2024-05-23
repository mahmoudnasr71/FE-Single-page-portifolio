import React, { useState, useEffect } from "react";
import "./index.css";
import "./fonts.css";
import { Header } from "./Header";
import { TopHeader } from "./TopHeader";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { SectionLine } from "./SectionLine";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobile2, setIsMobile2] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsMobile2(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className="App">
        <TopHeader />
        <Header isMobile={isMobile} isMobile2={isMobile2} />
        <Skills />
        <Projects isMobile={isMobile} isMobile2={isMobile2} />
      </main>
      <Contact />
      <SectionLine />
      <div className="footer" style={{ backgroundColor: "#242424" }}>
        <TopHeader bgColor="#242424" />
      </div>
    </>
  );
}
