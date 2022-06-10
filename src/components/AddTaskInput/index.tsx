import styles from './styles.module.scss';
import { PlusCircle } from 'phosphor-react'

export function AddTaskInput() {
  return (
    <form className={styles.input} >
      <input 
        placeholder="Adicionar uma nova tarefa"
      />
      <button type="submit">
        Criar
        <PlusCircle size={20}/>
      </button>
    </form>
  )
}

