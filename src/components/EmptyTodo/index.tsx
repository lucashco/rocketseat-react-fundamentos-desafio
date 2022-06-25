import clipboard from '../../assets/svgs/clipboard.svg'

import styles from './EmptyTodo.module.css';

export function EmptyTodo() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="Clipboard" />
      
      <p>
        <strong>Você ainda não tem tarefas cadastradas </strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
