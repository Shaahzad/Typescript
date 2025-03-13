import express from "express";
import { createTodo, getTodo, updateTodo } from "../controllers/todo";

const router = express.Router();

router.post("/", createTodo)
router.get("/", getTodo)
router.put("/:todoId", updateTodo)
router.delete("/:todoId")


export default router