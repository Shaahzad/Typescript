import express from "express";
import { createTodo, DeleteTodo, getTodo, updateTodo } from "../controllers/todo";

const router = express.Router();

router.post("/", createTodo)
router.get("/", getTodo)
router.put("/:todoId", updateTodo)
router.delete("/:todoId", DeleteTodo)


export default router