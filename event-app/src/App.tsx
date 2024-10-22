import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import { Redirect } from "./components/Redirect";
import { MainPage } from './views/mainPage';

const App = () => {
  // HINT: Wrap the MyBudgetTracker component with AppContextProvider
    return <MainPage />;
  
};

export default App;
