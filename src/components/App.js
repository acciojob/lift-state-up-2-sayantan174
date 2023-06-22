
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {
  const [input,setInput]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <p>{input}</p>
        <Child/>
    </div>
  )
}

export default App
