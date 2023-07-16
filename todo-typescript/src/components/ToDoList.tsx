import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";
import data from "../data/db.json";
import "../App.css";
import { ToDoItem } from "../data/types";

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState<ToDoItem | null>(null);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    setTodos(data.todos);
  }, []);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    setEditTodo(todos.find((todo) => todo.id === id) || null);
    setEditMode(true);
  };

  const handleSave = (id: number, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
    setEditMode(false);
    setEditTodo(null);
  };

  const handleCreate = (title: string) => {
    const newId = Math.max(...todos.map((todo) => todo.id), 0) + 1;
    setTodos([...todos, { id: newId, title, completed: false }]);
    setNewTodo("");
  };

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      {editMode ? (
        <div className="todo-form">
          <input
            type="text"
            value={editTodo?.title || ""}
            onChange={(e) =>
              setEditTodo({ ...editTodo!, title: e.target.value })
            }
          />
          <button onClick={() => handleSave(editTodo!.id, editTodo!.title)}>
            Save
          </button>
        </div>
      ) : (
        <div className="todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="New todo..."
          />
          <button onClick={() => handleCreate(newTodo)}>Create</button>
        </div>
      )}
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default ToDoList;
