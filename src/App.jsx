
import './App.css'

function App() {
 const todos = [
  "Review assignments",
  "Revise for my exams",
  "Prepare for my project presentation"
 ] 
 return (
   <>
   <h1>My Todos</h1>
   <ul>
    {todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ))}
   </ul>
   </>
 )
   
}

export default App
