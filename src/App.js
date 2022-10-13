import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import { Route, Link, useHistory } from "react-router-dom";
import Profile from "./Components/Profile";
import {AppContext} from './AppContext'

function App() {
  const [state, setState] = useState(":)")
  const history = useHistory(); 
  return (
    <div className="App">
        <Link style={{marginRight:20}} to='/hello'>Hello</Link>
        <Link style={{marginRight:20}} to='/profile'>Profile Page</Link>
        {/* <Link to='/about'>About Page</Link> */}
        <button style={{marginRight:20}} onClick={()=>history.push('/about')}>About Page</button>
        <AppContext.Provider value={{data:state}}>
        <Route render={()=><h1>HELLO WORLD</h1>} path="/hello" />
        <Route path="/about" >
          <About></About>
        </Route>
        <Route path="/profile" >
          <Profile></Profile>
        </Route>
        </AppContext.Provider>
    </div>
  );
}

export default App;
