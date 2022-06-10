import styles from './styles.module.scss'
import todoLogoImg from '../../assets/todo-logo.svg';

export function Header () {
  return (
    <header className={styles.header} >
      <img src={todoLogoImg}/>
    </header>
  )
}