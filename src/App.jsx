import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


import styles from './App.module.css'

import './global.css'


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
          <Post author="Neymar Jr." 
                content="Saudades do que a gente não viveu ainda."
          />
          <Post author="Luis Fabiano" 
                content="Entre brigar e bater o pênalti, eu prefiro ajudar na briga."
          />   
        </main>
     
      </div>
    </div>
  )
}

