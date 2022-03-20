import React from 'react'
import "./Resume.css"

function Resume() {
  return (
    <div class="Container">
      <iframe src={require("../../data/resume.pdf")} width="100%" height="100%"/>
    </div>
  );
}

export default Resume;
