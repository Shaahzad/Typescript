import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todolist from './components/Todolist'
import { Todo } from './types/todos'
function App() {
 const [todos, setTodos] = useState<Todo[]>([])

 const addTodoHandler = (text: string) => {
    const id = Math.random().toString()
    setTodos([...todos, {
      id,
      text
    }])
 }

  return ( 
    <main className='max-w-6xl mx-auto'>
      <AddTodo onaddTodo = {addTodoHandler}/>
    <Todolist items={todos}/>
    </main>
   )
}

export default App
