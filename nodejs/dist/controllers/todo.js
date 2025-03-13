"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const Todo_1 = require("../model/Todo");
const Todo = [];
const createTodo = (req, res) => {
    //  const text = (req.body as {text: string}).text
    const text = req.body.text;
    const newTodo = new Todo_1.TODO(Math.random().toString(), text);
    Todo.push(newTodo);
    res.status(201).json({
        message: "Todo created",
        todo: newTodo
    });
};
exports.createTodo = createTodo;
const getTodo = (req, res) => {
    res.status(200).json({
        todos: Todo
    });
};
exports.getTodo = getTodo;
const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    const text = req.body.text;
    const todoindex = Todo.findIndex(todo => todo.id === todoId);
    if (todoindex < 0) {
        throw new Error("Todo not found ");
    }
    Todo[todoindex] = new Todo_1.TODO(todoId, text);
    res.status(200).json({
        message: "Todo updated",
        todo: Todo[todoindex]
    });
};
exports.updateTodo = updateTodo;
const DeleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    const todoindex = Todo.findIndex(todo => todo.id === todoId);
    if (todoindex < 0) {
        throw new Error("Todo not found ");
    }
    Todo.splice(todoindex, 1);
    res.status(200).json({
        message: "Todo deleted",
    });
};
exports.DeleteTodo = DeleteTodo;
