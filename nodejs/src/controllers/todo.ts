import { RequestHandler } from "express"
import { TODO } from "../model/Todo"

const Todo: TODO[] = []
export const createTodo: RequestHandler = (req, res) => {
    //  const text = (req.body as {text: string}).text
    const text = (<{ text: string }>req.body).text

    const newTodo = new TODO(Math.random().toString(), text)

    Todo.push(newTodo)

    res.status(201).json({
        message: "Todo created",
        todo: newTodo
    })
}

export const getTodo: RequestHandler = (req, res) => {
    res.status(200).json({
        todos: Todo
    })
}

export const updateTodo: RequestHandler<{ todoId: string }> = (req, res) => {
    const todoId = req.params.todoId
    const text = (req.body as { text: string }).text

    const todoindex = Todo.findIndex(todo => todo.id === todoId)

    if (todoindex < 0) {
        throw new Error("Todo not found ")
    }

    Todo[todoindex] = new TODO(todoId, text)

    res.status(200).json({
        message: "Todo updated",
        todo: Todo[todoindex]
    })
}


export const DeleteTodo: RequestHandler<{ todoId: string }> = (req, res) => {
    const todoId = req.params.todoId


    const todoindex = Todo.findIndex(todo => todo.id === todoId)

    if (todoindex < 0) {
        throw new Error("Todo not found ")
    }

    Todo.splice(todoindex, 1)

    res.status(200).json({
        message: "Todo deleted",
    })
}
