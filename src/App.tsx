import { ChangeEvent, FormEvent, useState } from 'react';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { PlusCircle } from 'phosphor-react';

import './global.scss'
import styles from './App.module.scss';

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [ tasks, setTasks ] = useState<Task[]>([]);
  const [ newTask, setNewTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const task = {
      id: `random-id-${Math.random()}`,
      text: newTask,
      isCompleted: false,
    }

    setTasks([...tasks, task])
    setNewTask('');
  }

  function handleDeleteTask(id: string) {
    setTasks((state) => state.filter((task) => task.id !== id));
  }

  function handleCompleteTask(id: string) {
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
    })

    setTasks(tasksUpdated);
  }

  return (
    <>
      <Header/>
        <div className={styles.wrapper}>
          <form className={styles.input} onSubmit={handleCreateNewTask} >
            <input 
              placeholder="Adicionar uma nova tarefa"
              value={newTask}
              onChange={handleNewTaskChange}
            />
            <button type="submit">
              Criar
              <PlusCircle size={20}/>
            </button>
          </form>
          
          <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} />
        </div>
    </> 
  )
}

export default App
