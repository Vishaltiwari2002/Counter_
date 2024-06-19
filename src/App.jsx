import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom/client'

function App() {

  let [counter, setcounter] = useState(5)

  //setcounter ka name kuch bhi rakh skte h 

  //let counter = 5

  const addvalue =()=> {

    //console.log("value added", counter);
    //counter = counter+1;
    setcounter(counter+1)
  }

  const removevalue =  () =>{
    setcounter(counter-1)
  }
 
  return (
    <>
      <h3>Chai Aur react</h3>
      <h4>counter value : {counter}</h4>
      <button onClick={addvalue}>Add value {counter}</button>
      <br/>
      <button onClick={removevalue}>Remove Value {counter}</button>
      <h4> footer: {counter}</h4>

    </>
  )
}

export default App
