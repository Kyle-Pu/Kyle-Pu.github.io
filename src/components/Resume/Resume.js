import React from 'react'
import "./Resume.css"

function Resume() {
  let titles = ["Research Assistant @ Whitney Lab, UC Berkeley", "Research Assistant @ Pellegrini Lab, UCLA", "Summer Research Fellow, National Institutes of Health"]; // Titles of work experiences
  let timelines = ["Spring to Summer", "August to Fall", "Winter to Spring Quarter"]; // Times of each activity
  let descriptions = ["Outline shit", "Do shit", "Look at shit"]; // More details

  return (
    <div className="Container">
      {titles.map((title, index) => {
        return (
          <div key={index}>
            <p className="job-title">{title}</p>
            <p className="job-times">{timelines[index]}</p>
            <p className="job-description">{descriptions[index]}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Resume;
