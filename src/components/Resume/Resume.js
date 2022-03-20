import React from 'react'
import "./Resume.css"

function Resume() {
  let titles = ["Research Assistant @ Whitney Lab, UC Berkeley", "Research Assistant @ Pellegrini Lab, UCLA", "Summer Research Fellow, National Institutes of Health"]; // Titles of work experiences
  let timelines = ["Spring to Summer", "August to Fall", "Winter to Spring Quarter"]; // Times of each activity
  let descriptions = ["Outline shit", "Do shit", "Look at shit"]; // More details

  return (
    <div class="Container">
      {titles.map((title, index) => {
        return (
          <div>
            <p class="job-title">{title}</p>
            <p class="job-times">{timelines[index]}</p>
            <p class="job-description">{descriptions[index]}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Resume;
