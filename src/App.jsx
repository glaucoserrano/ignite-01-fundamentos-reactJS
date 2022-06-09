import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id:1,
    author:{
      avatarUrl:'https://pbs.twimg.com/media/EPAEY2XWAAEIt-Q?format=jpg&name=large',
      name:'Neymar Jr.',
      role: 'Jogador PSG'
    },
    content:[
      {type: 'paragraph', content:'Saudades do que a gente não viveu ainda.'},
      {type: 'link', content:'#memorias #pegadinha #meme'}
    ],
    publishedAt: new Date('2022-06-08 19:05:00')
  },
  {
    id:2,
    author:{
      avatarUrl:'http://lagesonline.com.br/wp/wp-content/uploads/2020/07/Luis-Fabiano-do-Inter.jpg',
      name:'Luis Fabiano',
      role: 'Jogador Aposentado'
    },
    content:[
      {type: 'paragraph', content:'Entre brigar e bater o pênalti, eu prefiro ajudar na briga.'},
      {type: 'link', content:'#briga #futebolraiz #spfcxriver'}
    ],
    publishedAt: new Date('2022-05-11 19:05:00')
  },
]

export function App(){
  return (
    <div>
      {/* passar atributos por meio de propriedades para o componente post */}
      <Header />
      <div className={styles.wrapper}>
        <Sidebar>
          sidebar
        </Sidebar>
        <main>
          {posts.map(post =>{
            return( 
              <Post 
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />)
            })}   
        </main>
     
      </div>
    </div>
  )
}

