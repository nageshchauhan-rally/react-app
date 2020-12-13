import React from 'react';
import './App.css';
// @ts-ignore
import Login from './components/Login';
import Search from './components/Search';
import { Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/search" exact component={Search} />
        </BrowserRouter>
    </div>
  );
}

export default App;