import { Trash } from "phosphor-react";

import styles from './styles.module.scss';

export function TasksItem () {
  return (
    <main className={styles.taskItem} >
      <div>
        <input id="checkbox" type="checkbox"/> 
        <label htmlFor="checkbox"/>
      </div>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer..
      es integeres integer

      </p>
      <button type="button">
        <Trash/>  
      </button>  
    </main>
  )
}