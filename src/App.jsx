import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor,setBgColor] = useState("bg-dark")

  const green=()=>{
    setBgColor("green")
  }

  const red=()=>{
    setBgColor("red")
  }

  const brown=()=>{
    setBgColor("brown")
  }

  const orange=()=>{
    setBgColor("orange")
  }

  const blue=()=>{
    setBgColor("blue")
  }

  return (
    <>
      <div className={`${bgColor}`} style={{height:800,backgroundColor:bgColor}}>
          <h1 className='text-center'>Background Color Changing App</h1>
          <div className='buttons d-flex justify-content-center'>
            <button onClick={green} className='py-3 px-5 m-4 rounded bg-dark text-success'>Green</button>
            <button onClick={red} className='py-3 px-5 m-4 rounded bg-dark text-danger'>Red</button>
            <button onClick={blue} className='py-3 px-5 m-4 rounded bg-dark text-primary'>Blue</button>  
            <button onClick={brown} className='py-3 px-5 m-4 rounded bg-dark' style={{color:"brown"}}>Brown</button>
            <button onClick={orange} className='py-3 px-5 m-4 rounded bg-dark' style={{color:"orange"}}>Orange</button> 
          </div>
      </div>
    </>
  )
}

export default App
