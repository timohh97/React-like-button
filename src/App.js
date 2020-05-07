import React, {useState} from 'react'
import './App.css'



function App()
{
  const [count, setCount] = useState(0)
  const [red, green] = useState(false)
  const [left,right] = useState(false)

  const incrementLike= ()=>
  {
      setCount(count+1)
      green(!red)
      right(!left)
  }


  return(
    <div className={left ? "left" : "right"}>
  <div id="like">
      <h1 className={red ? "red" : "green"}>Like button</h1>
    <button onClick={incrementLike}>Like</button>
  <h1>{count}</h1>
  </div>
  </div>
  )
}


export default App


