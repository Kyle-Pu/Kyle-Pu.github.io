import React from 'react'
import "./Blog.css"
import blogposts from "../blogposts"

function Blog() {
  let titles = blogposts.map((bPost) => bPost.title)
  let dates = blogposts.map((bPost) => bPost.date)
  let tags = blogposts.map((bPost) => bPost.tags)
  let content = blogposts.map((bPost) => bPost.content)
  
  return (
    <div className="Container">
      {titles.map((title, index) => {
        return (
          <div className="BPost" key="index">
            <h1 className="Title">{title}</h1>
            <h2 className="Date">{dates[index]}</h2>
            <h2 className="Tag"> #{tags[index].join(" #")}</h2>
            {content[index]}
            <hr></hr>
          </div>
        )
      })}
    </div>
  );
}

export default Blog;
