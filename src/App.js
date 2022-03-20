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
  return (
    <div class="website">
      <BrowserRouter>
        <div class="Wrapper">
          <div class="NavContainer">
            <Link to="/Home" class="NavButton">Home</Link>
            {" "}
            <Link to="/Resume" class="NavButton">Résumé</Link>
            {" "}
            <Link to="/Blog" class="NavButton">Blog</Link>
          </div>

          <div class="Logo">
            <p>Kyle Pu</p>
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
