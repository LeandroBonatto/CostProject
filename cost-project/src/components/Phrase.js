import styles from './Phrase.module.css'

function Phrase() {
    return(
        <div  className={styles.fraseContainer}>
            <p className={styles.PhraseContent}>This is Phrase component</p>
        </div>
    )

}

export default Phrase