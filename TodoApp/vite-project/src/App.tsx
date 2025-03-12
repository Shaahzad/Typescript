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

 const removeTodo = (TodoId: string) => {
  const newTodo = todos.filter((todo : Todo)=> {
    return todo.id !== TodoId
  })
  setTodos(newTodo)
 }

  return ( 
    <main className='max-w-6xl mx-auto my-10 px-5 md:px-0'>
      <AddTodo onaddTodo = {addTodoHandler}/>
    <Todolist items={todos} onremovetodo={removeTodo}/>
    </main>
   )
}

export default App
