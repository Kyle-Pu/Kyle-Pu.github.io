import React from 'react'
import HomePage from "./components/HomePage/HomePage"
import Resume from "./components/Resume/Resume"
import "./App.css"

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

        <div className='absolute right-0'>
          <Link to="/Home" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Home</Link>
          {" "}
          <Link to="/Resume" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Resume</Link>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
