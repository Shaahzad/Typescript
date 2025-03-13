"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controllers/todo");
const router = express_1.default.Router();
router.post("/", todo_1.createTodo);
router.get("/", todo_1.getTodo);
router.put("/:todoId", todo_1.updateTodo);
router.delete("/:todoId", todo_1.DeleteTodo);
exports.default = router;
