import TodoApp from './components/TodoApp';

import logo from './assets/svgs/logo.svg';

import styles from './App.module.css';

function App() {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <img src={logo} alt="Logomarca" />
        </div>
      </header>

      <main className={styles.mainContainer}>
        <TodoApp />
      </main>
    </>
  )
}

export default App
