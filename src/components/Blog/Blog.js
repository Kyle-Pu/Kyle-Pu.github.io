import React from 'react'
import "./Blog.css"
import blogposts from "./blogposts"

function Blog() {
  // Sort blogposts by date of publication (descending order)
  let bpDate = []; // Dates as strings
  for(let k = 0; k < blogposts.length; k++){
    bpDate.push(blogposts[k]["date"]);
    let parsedDate = bpDate[k].split("/").map((num) => parseInt(num));
    let month = parsedDate[0];
    let day = parsedDate[1];
    let year = parsedDate[2];
    let encoding = day + month*31 + year*12*31; // A numerical value to represent each date. One to one mapping of date to encoding (I think lol).
    //console.log(encoding);
    blogposts[k]["encoding"] = encoding; // Associate each encoding with its respective blog post
  }

  blogposts.sort((a, b) => {
    return (a.encoding > b.encoding) ? -1 : ((a.encoding == b.encoding) ? 0 : 1); // -1 means blogpost a shows up at a lower index (before) blogpost b if and only if a is newer. 0 == equal, we don't care. 1 == a is older so it should go later down in the list
  })

  let titles = blogposts.map((bPost) => bPost.title)
  let dates = blogposts.map((bPost) => bPost.date)
  let tags = blogposts.map((bPost) => bPost.tags)
  let content = blogposts.map((bPost) => bPost.content)
  
  return (
    <div className="Container">
      {titles.map((title, index) => {
        return (
          <div className="BPost" key={index}>
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
