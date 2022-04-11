// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [counter,setcounter]=React.useState(5);
  
  const handleIncrement=(value)=>{
    setcounter(counter+value);
  };
  console.log("value");

  return (
    <div className="App">
     <h1>Counter</h1>
     <h2>{counter}</h2>
     <button onClick={()=>{handleIncrement(1)}}>Add</button>{" "}
     <button onClick={()=>{handleIncrement(-1)}}>Sub</button>
    </div>
  );
}

export default App;
