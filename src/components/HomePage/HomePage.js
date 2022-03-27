import React from 'react'
import "./HomePage.css"

function HomePage() {
  return (
    <div className="Container">
      <div className="Picture">
        <img className="pfp" src={require("../../imgs/pfp.png")} alt="Profile headshot" />
        <p className="EasterEgg">Off Rodeo Drive in Beverly Hills! No, I don't live there. Yes, I wish I lived there.</p>
      </div>
      <div className="Caption">
        <p>2nd Year CS @ UCLA</p>
        <p>
          <a href="https://github.com/kyle-pu" target="_blank"><img className="IconLink" src={require("../../imgs/GitHub-Logo.png")} alt="GitHub Icon" /></a> { " " }

          <a href="https://linkedin.com/in/kyle-pu" target="_blank"><img className="IconLink" src={require("../../imgs/linkedin-logo-512x512.png")} alt="LinkedIn Icon" /></a> { " " }

          <a href="https://scholar.google.com/citations?user=1nlDj9UAAAAJ&hl=en" target="_blank"><img className="IconLink" src={require("../../imgs/63222-google-scholar-doctor-science-university-philosophy-computer.png")} alt="Google Scholar Icon" /></a>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
