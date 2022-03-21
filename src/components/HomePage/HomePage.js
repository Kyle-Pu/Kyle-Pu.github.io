import React from 'react'
import "./HomePage.css"

function HomePage() {
  return (
    <div className="Container">
      <div className="Picture">
        <img src={require("../../imgs/pfp.png")} alt="Profile picture" />
      </div>
      <div className="Caption">
        <p>2nd Year CS @ UCLA</p>
        <p className="Question">Where am I here?</p>
        <p className="Answer">Off Rodeo Drive in Beverly Hills! No, I don't live there. Yes, I wish I lived there.</p>
      </div>
    </div>
  );
}

export default HomePage;
