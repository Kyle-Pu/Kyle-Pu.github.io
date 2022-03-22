import React from 'react'
import "./HomePage.css"

function HomePage() {
  return (
    <div className="Container">
      <div className="Picture">
        <img className="pfp" src={require("../../imgs/pfp.png")} alt="Profile picture" />
        <p className="EasterEgg">Off Rodeo Drive in Beverly Hills! No, I don't live there. Yes, I wish I lived there.</p>
      </div>
      <div className="Caption">
        <p>2nd Year CS @ UCLA</p>
        <p><a href="https://github.com/kyle-pu" target="_blank">GitHub</a> | <a href="https://linkedin.com/in/kyle-pu" target="_blank">LinkedIn</a> | <a href="https://scholar.google.com/citations?user=1nlDj9UAAAAJ&hl=en" target="_blank">Google Scholar</a></p>
      </div>
    </div>
  );
}

export default HomePage;
