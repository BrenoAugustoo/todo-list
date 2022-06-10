import './global.scss'

import styles from './App.module.scss';
import { Header } from './components/Header';
import { AddTaskInput } from './components/AddTaskInput';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <AddTaskInput/>

        <Tasks/>
      </div>
    </> 
  )
}

export default App
