import React from 'react'
import "./HomePage.css"

function HomePage() {
  return (
    <div class="Container">
      <div class="Picture">
        <img src={require("../../imgs/pfp.png")} alt="Profile picture" />
      </div>
      <div class="Caption">
        <p>2nd Year CS @ UCLA</p>
        <p class="Question">Where am I here?</p>
        <p class="Answer">Off Rodeo Drive in Beverly Hills! No, I don't live there. Yes, I wish I lived there.</p>
      </div>
    </div>
  );
}

export default HomePage;
