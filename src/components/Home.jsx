import React from "react";
//import "./Home.css";
import Projects from "./Projects";
import content from "./content";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="Home">
        {content.map((c) => (
          <Projects
            key={c.id}
            name={c.name}
            info={c.info}
            link={c.link}
            git={c.git}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
