import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(10);
  // let counter=5;

  const addvalue=()=>{
    console.log("add value ", Math.ceil(Math.random()*10));
setCounter(counter+1);

  }

  const removeValue=()=>{
    console.log("add value ", Math.ceil(Math.random()*10));
setCounter(counter-1);

  }


  return (
   <>
   <h1> Chai Aur Recat</h1>
   <h2>Counter Value: {counter}</h2>

  <button onClick={addvalue} >Increse Value</button>
  <br/>
  <br/>
  <button  onClick={removeValue}>decrese Value</button>
   </>
  )
}

export default App
