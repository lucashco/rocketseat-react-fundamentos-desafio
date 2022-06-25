import { Trash } from "phosphor-react";
import { useState } from "react";

import { ITodo } from "../../interfaces/Todo";
import Checkbox from "../Checkbox";

import styles from './TodoItem.module.css';

interface Props {
  todo: ITodo;
  onDeleteTodo: (id: string) => void
  onCompleteTodo: (id: string) => void
}

export function TodoItem({ todo, onDeleteTodo, onCompleteTodo }: Props) {

  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  function handleCompleteTodo() {
    onCompleteTodo(todo.id)
  }

  return (
    <div className={styles.todoItem}>
      <Checkbox onChange={handleCompleteTodo} checked={todo.completed} />
      <p className={todo.completed ? styles.completed : ''}>{todo.text}</p>

      <button onClick={handleDeleteTodo} title="Excluir Todo">
        <Trash size={16} />
      </button>
    </div>
  )
}
