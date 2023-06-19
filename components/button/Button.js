import styles from './buttonscss.module.css'
export default function Button() {
    return (
        <>
        <button data-text="Awesome" className={styles.button}>
            <span className={styles.actualtext}>&nbsp;uiverse&nbsp;</span>
            <span className={styles.hovertext} aria-hidden="true">&nbsp;uiverse&nbsp;</span>
        </button>
        </>
    )
}
