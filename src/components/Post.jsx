import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
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