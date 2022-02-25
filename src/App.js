import React from 'react'
import HomePage from "./components/HomePage/HomePage"
import Resume from "./components/Resume/Resume"

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/Home">Home</Link> |{" "}
          <Link to="/Resume">Resume</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
