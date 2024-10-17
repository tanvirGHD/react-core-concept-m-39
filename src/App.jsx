
import './App.css'

function App() {
  
  function handleClick(){
    alert('button click')
  }

  const handleClick2 = () =>{
    alert('Button2 Click')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concept</h3> 
      {/* <button onclick="handleClick()">Click Me</button> **normal html */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('Third Click')}}>Third</button>
      {/* vejaila */}
      <button onClick={() => addToFive(5)}>Four</button> 
    </>
  )
}

export default App
