import { EmptyTodo } from '../EmptyTodo';
import { TodoItem } from '../TodoItem';

import { ITodo } from '../../interfaces/Todo';

import styles from './TodoList.module.css';

interface Props {
  todos: ITodo[];
  onDeleteTodo: (id: string) => void
  onCompleteTodo: (id: string) => void
}

export default function TodoList({ todos, onDeleteTodo, onCompleteTodo }: Props) {
  const todosCreated = todos.length;
  const todosCompleted = todos.reduce((prevValue, todo) => {
    return todo.completed ? prevValue + 1 : prevValue;
  }, 0);

  return (
    <div className={styles.todoList}>
      <header>
        <div className={styles.headersLabel}>
          <p>Tarefas Criadas</p>
          <span>{todosCreated}</span>
        </div>
        <div className={styles.headersLabel}>
          <p>Concluídas</p>
          <span>{`${todosCompleted} de ${todosCreated}`}</span>
        </div>
      </header>

      {todos.length === 0 && (
        <EmptyTodo />
      )}

      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onCompleteTodo={onCompleteTodo} />
      ))}
    </div>
  )
}
