import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/51676475?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Glauco Serrano</strong>
              <time title="07 de junho às 17:51h " dateTime="2022-06-07 17:51:03" >Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash  size={24}/>
            </button>
          </header>
          <p>Muito bom, Parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}