import React, { useState, useEffect } from 'react'
import "./Blog.css"
import blogposts from "./blogposts"

function Blog() {
  let [showFilters, setShowFilters] = useState("");
  let [filter, setFilter] = useState([]);

  // Sort blogposts by date of publication (descending order)
  let bpDate = []; // Dates as strings
  for (let k = 0; k < blogposts.length; k++) {
    bpDate.push(blogposts[k]["date"]);
    let parsedDate = bpDate[k].split("/").map((num) => parseInt(num));
    let month = parsedDate[0];
    let day = parsedDate[1];
    let year = parsedDate[2];
    let encoding = day + month * 31 + year * 12 * 31; // A numerical value to represent each date. One to one mapping of date to encoding (I think lol).
    //console.log(encoding);
    blogposts[k]["encoding"] = encoding; // Associate each encoding with its respective blog post
  }

  blogposts.sort((a, b) => {
    return (a.encoding > b.encoding) ? -1 : ((a.encoding === b.encoding) ? 0 : 1); // -1 means blogpost a shows up at a lower index (before) blogpost b if and only if a is newer. 0 == equal, we don't care. 1 == a is older so it should go later down in the list
  })

  let titles = blogposts.map((bPost) => bPost.title)
  let dates = blogposts.map((bPost) => bPost.date)
  let tags = blogposts.map((bPost) => bPost.tags)
  let content = blogposts.map((bPost) => bPost.content)

  // Get tags data to enable filtering by tags
  const allTags = new Set()
  tags.forEach((tagsList) => tagsList.forEach((t) => allTags.add(t))) // Add all tags to set
  const tagFilters = Array.from(allTags)

  const handleClick = () => {
    showFilters === "ShowDropdown" ? setShowFilters("") : setShowFilters("ShowDropdown"); // Toggle dropdown visibility. Show dropdown when "Filter" button is clicked. Hide when clicked again
  }

  const handleFilter = (val) => {
    // Normal tags
    if (filter.includes(val)) {
      let indRemove = filter.indexOf(val) // Toggle specific filter off if clicked again
      setFilter(filter.filter((t, ind) => {
        if (ind !== indRemove) {
          return t
        }
      }));
    } else {
      setFilter([...filter, val]) // Add selected filter to filters list if not already there
    }

    // Check for clear all. Note: this check MUST come AFTER the check for normal tags to avoid adding a "Clear All" filter
    if (val === "Clear All") {
      setFilter([])
    }

    setShowFilters(""); // Make filters list disappear if a filter is clicked (most common scenario is user selects just one tag)
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7288742389789708"
    script.async = true
    script.crossOrigin = "anonymous"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="Container">
      <div className="TagsContainer">
        <button onClick={handleClick} className="DropdownButton">{showFilters === "" ? <txt>Filter</txt> : <txt>Close</txt>}</button>
        <div className={"Dropdown" + " " + showFilters}>
          {tagFilters.map((t) => <p className="tagFilter" onClick={() => handleFilter(t)} value="{t}">#{t}</p>)}
          <p className="tagFilter" style={{ "border": "1px solid blue" }} value="Clear All" onClick={() => handleFilter("Clear All")}>Clear All</p>
        </div>
        {filter.length !== 0 ? filter.map((f) => <txt className="FilterStatus">#{f}</txt>) : ""}
      </div>

      {titles.map((title, index) => {
        // Only display blog post if it matches the current filter(s), if any
        if ((filter.length == 0) || filter.every(t => tags[index].includes(t))) {
          return (
            <div className="BPost" key={index}>
              <h1 className="Title">{title}</h1>
              <h2 className="Date">{dates[index]}</h2>
              <h2 className="Tag"> #{tags[index].join(" #")}</h2>
              <div className="Content">{content[index]}</div>
              <hr></hr>
            </div>
          )
        }
      })}
    </div>
  );
}

export default Blog;
