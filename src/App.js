//Babel compiles JSX down to React.createElement() calls.

//In multipage application , there is separate html css and js  corresponding to different pages like cwh about  have different html css and js , cwh contact have different html css and js

// in single page app, there is single html css  and js . and js can manage all the app without loading it again and again

/* Props:
properties 

*/

/*
container is a class of bootstrap which align the textarea in center
*/

// import React from 'react'
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("! Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "#e3eae3";
      showAlert("! Light mode has been enabled", "success");
    }
  };
  return (
    <>

      <Router>
      <Navbar
            title="TextTransformX"
            mode={mode}
            about=" About Us"
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          <div className="container my-3">
        <Routes>
          
          

          {/* <Navbar  /> */}

        
            {/* <Switch> */}
            <Route exact path="/about" element={<About />}></Route>

            <Route exact path="/" element={ <TextForm
                showAlert={showAlert}
                heading="Enter the text "
                mode={mode}
              />}>
            </Route>
            {/* <About /> */}
         
        </Routes>
        </div>
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;



