import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="John Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          />
          <Post
            author="Jane Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
            />
        </main>
      </div>
    </>
  )
}
