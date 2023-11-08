import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainApp from "./MainApp"
import PrimaryPage from "./PrimaryPage";
import "./PrimaryPage.css";

function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PrimaryPage/>}/>
          <Route path="/mainapp" element={<MainApp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
