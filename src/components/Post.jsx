import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return(
        <>
            <article className={styles.post}>
                <header>
                    
                    <div className={styles.author}>
                        <Avatar src="https://github.com/omarcoaur3lio.png" />
                        <div className={styles.authorInfo}>
                            <strong>Marco Aurélio</strong>
                            <span>Front-end Developer</span>
                        </div>
                    </div>

                    <time title='5 de julho às 10:23' dateTime='2022-06-05 10:23:00'>Publicado há 1h</time>
                </header>
                
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p><a href="https://github.com/omarcoaur3lio" target={"_blank"}>github.com/omarcoaur3lio</a></p>
                    <p>
                        <a href="#">#novoprojeto</a>{' '}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a>
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu comentário</strong>
                    <textarea placeholder='Deixe um comentário' />
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>

                <div className={styles.commenList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>

            </article>
        </>
    )
}