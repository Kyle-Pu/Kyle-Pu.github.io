import React from 'react'
import "./Resume.css"

function Resume() {
  let titles = ["Coming soon!"]; // Titles of work experiences
  let timelines = []; // Times of each activity
  let descriptions = [""]; // More details

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
