import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}){
  const [likeCount,setLikeCount] = useState(0)
  function handleDeleteComment(){
    onDeleteComment(content)
  }
  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    })
  }
  return(
    <div className={styles.comment}>
      <Avatar 
        src="https://avatars.githubusercontent.com/u/51676475?v=4"
        hasborder={false}
        alt="" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Glauco Serrano</strong>
              <time title="07 de junho às 17:51h " dateTime="2022-06-07 17:51:03" >Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash  size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}