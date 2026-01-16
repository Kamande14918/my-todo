
import './App.css'
import TodoList from './features/TodoList.jsx';
import TodoForm from './features/TodoForm.js';

function App() {
 const todos = [
  "Review assignments",
  "Revise for my exams",
  "Prepare for my project presentation"
 ] 
 return (
   <>
   <h1>My Todos</h1>
    <TodoForm/>
    <TodoList todos={todos}/>
   </>
 )
   
}

export default App
