import styles from './styles.module.scss';
import clipboardImg from '../../assets/clipboard.svg';
import { TasksItem } from '../TasksItem';

export function Tasks() {
  const hasTasks = true;
  
  return (
    <>
      <header className={styles.header}>
        <strong>
          Tarefas criadas <span> 0 </span>
        </strong>
        <strong>
          Concluídas <span> 0 </span>
        </strong>
      </header>

      { hasTasks ? (
        <>
          <TasksItem/>
          <TasksItem/>
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