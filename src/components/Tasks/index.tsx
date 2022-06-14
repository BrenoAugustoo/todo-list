import styles from './styles.module.scss';
import clipboardImg from '../../assets/clipboard.svg';
import { Task } from '../../App';
import { Trash } from 'phosphor-react';

interface TasksProps {
  tasks: Task[],
  onDeleteTask: ( id: string ) => void;
  onCompleteTask: (id: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: TasksProps ) {
  const hasTasks = tasks.length;

  const completedTasks = tasks.filter(task => task.isCompleted).length;
  
  return (
    <>
      <header className={styles.header}>
        <strong>
          Tarefas criadas <span>{tasks.length}</span>
        </strong>
        <strong>
          Concluídas <span> {completedTasks} de {tasks.length} </span>
        </strong>
      </header>

      { hasTasks ? (
        <>
          {tasks.map(task => {
            return (
              <main className={styles.taskItem} key={task.id} >
                <div>
                  <input id={`checkbox-${task.id}`} type="checkbox" onClick={() => onCompleteTask(task.id) } /> 
                  <label htmlFor={`checkbox-${task.id}`}/>
                </div>
                <p className={ task.isCompleted ? styles.selected : ''} >
                  {task.text}
                </p>
                <button type="button" onClick={() => onDeleteTask(task.id)} >
                  <Trash/>  
                </button>  
             </main>
            )
          })}
        </>
      ) : (
        <section className={styles.emptyTasks} >
        <img src={clipboardImg}/>
        <strong> Você ainda não tem tarefas cadastradas <br/> 
          <p> Crie tarefas e organize seus itens a fazer</p>
        </strong>
      </section>
      ) }
    </>
  )
}