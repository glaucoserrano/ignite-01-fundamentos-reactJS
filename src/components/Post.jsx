import { Comment } from './Comment'
import styles from './Post.module.css'
export function Post(){
 // props: Objeto enviado pela chamada do componente. é acesso props.nomedapropriedade
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar}
               src="https://avatars.githubusercontent.com/u/51676475?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Neymar Junior</strong>
            <span>Jogador PSG</span>
          </div>
        </div>
        <time title="07 de junho às 17:51h " dateTime="2022-06-07 17:51:03" >Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Saudades do que a gente não viveu ainda.</p>

        <p><a href="#">#memorias #pegadinha #meme</a></p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Escreva um comentário..."
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
        
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
    
    )
}

