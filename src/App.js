import React from 'react'
import HomePage from "./components/HomePage/HomePage"
import Resume from "./components/Resume/Resume"
import Blog from "./components/Blog/Blog"
import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  document.title = "Kyle Pu"

  return (
    <div className="website">
      <BrowserRouter>
        <div className="Wrapper">
          <div className="NavContainer">
            <Link to="/Resume" className="NavButton">Résumé</Link>
            {" "}
            <Link to="/Blog" className="NavButton">Blog</Link>
          </div>

          <div className="Logo">
            <Link to="/Home" className="NavButton">Kyle Pu</Link>
          </div>

          <hr></hr>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
