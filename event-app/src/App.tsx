import React from 'react';
import './App.css';
import { Redirect } from "./components/Redirect";

function App() {
  let redirectURL = "https://github.com/nlormsby/EventTemplate"
  
  return (
    <div className="AppContainer">
      <Redirect url={redirectURL} text='Click Here' />
    </div>
  );
}

export default App;
