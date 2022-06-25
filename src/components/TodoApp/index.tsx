import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { Input } from '../Input';
import TodoList from '../TodoList';

import { ITodo } from '../../interfaces/Todo';

import styles from './TodoApp.module.css';

export default function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      text: newTodoText,
      completed: false,
    };

    setTodos(oldTodos => oldTodos.concat(newTodo));
    setNewTodoText('');
  }

  function handleTextTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTodoText(event.target.value);
  }

  function handleNewTodoInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function handleDeleteTodo(id: string) {
    setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
  }

  function handleCompleteTodo(id: string) {
    setTodos(oldTodos => oldTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    }))
  }

  const canAddNewTodo = !newTodoText

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input 
          name="newTodo" 
          value={newTodoText} 
          onChange={handleTextTodoChange}
          required
          onInvalid={handleNewTodoInvalid}
          autoComplete="off"
        />
        <button type="submit" className={styles.addButton} disabled={canAddNewTodo}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onCompleteTodo={handleCompleteTodo} />
    </>
  )
}
