import React from 'react';
import './App.css';
import { Redirect } from "./components/Redirect";
import { mainPage } from './views/mainPage';

// function App() {
//   let redirectURL = "https://github.com/nlormsby/EventTemplate"
  
//   return (
//     <div className="AppContainer">
//       <Redirect url={redirectURL} text='Click Here' />
//       <mainPage />
//     </div>
//   );
// }

const App = () => {
  // HINT: Wrap the MyBudgetTracker component with AppContextProvider
    return <mainPage />;

  
};

export default App;
