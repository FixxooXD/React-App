import React from "react";
import {useState} from "react";
// import logo from "./logo.svg"
import "./App.css";
import User from './user'

function App() {
  
  const[name,setName] = useState("Raj")
  return (
  <div className="app">
     <h1 >Props in React</h1>
     <User name={name} />
     
     <button onClick={()=>{setName("Anil")}}>Update User</button>

  </div>
  );
}

export default App;