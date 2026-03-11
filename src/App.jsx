
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      
    </>
  )
}



function Person() {
  const personStyle = {
    color:'red',
    border:"2px solid green",
    borderRadius:'20px'
  }
  return(
    <div style={personStyle}>

      <h1>Fardin</h1>
      <p>CSE Department</p>
    </div>
    
  )
}

export default App
