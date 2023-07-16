import React from 'react';
import '../App.css';
import { ToDoItem } from '../data/types';

interface ToDoProps {
  todo: ToDoItem;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onComplete: (id: number) => void;
}

const ToDo: React.FC<ToDoProps> = ({ todo, onDelete, onEdit, onComplete }) => {
  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <div>{todo.title}</div>
      <div>
        <button onClick={() => onComplete(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={() => onEdit(todo.id)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
