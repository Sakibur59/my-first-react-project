import Todo from './ToDo'
import './App.css'

function App() {
  
  const clickMe = () => {
    alert('I am clicked')
  }

  const MyNum = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }
  

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <Person></Person>
      <Developer name="fardin" device="Phone"></Developer>
      <Developer name="sara" device="laptop"></Developer>
      <Developer name="ayat" device="PC"></Developer>
      <Book name="Physics" author="Roma bijoy"></Book>
      <Book name="Chemistry" author="soroj kanto sing"></Book> */}
      {/* <Todo task='eat' isdone={true}></Todo>
      <Todo task='study' isdone={false}></Todo> */}
      <button onClick={clickMe}>Click Me</button>
      <button onClick={()=>{
        alert("i am clicked 2 ")
      }}>Click Me 2</button>
      <button onClick={()=>MyNum(10)}>Click Me 3</button>

      
    </>
  )
}

// function Book({name,author}){
//   return (
//     <div className='container'>
//       <p>Name: {name}</p>
//       <p>Author: {author}</p>
//     </div>
//   ) 
// }

// function Developer(props) {
//   console.log(props)
//   return (
//     <div style={{
//       color:"red",
//       border:"2px solid purple",
//       borderRadius:'20px'
//     }}>
//       <p>Name:{props.name}</p>
//       <p>Devices:{props.device}</p>
//     </div>
//   )
// }

// function Person() {
//   const personStyle = {
//     color:'red',
//     border:"2px solid green",
//     borderRadius:'20px'
//   }
//   return(
//     <div style={personStyle}>

//       <h1>Fardin</h1>
//       <p>CSE Department</p>
//     </div>
    
//   )
// }

export default App
