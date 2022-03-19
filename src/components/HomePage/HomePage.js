import React from 'react'
import "./HomePage.css"

function HomePage() {
  return (
    <div class="Container">
      <div class="Picture">
        <img src={require("../../imgs/pfp.jpeg")} alt="Profile picture" />
      </div>
    </div>
  );
}

export default HomePage;
