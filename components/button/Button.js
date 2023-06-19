import styles from './buttonscss.module.css'
export default function Button({ButtonText}) {
    
    return (
        <>
        <button data-text="Awesome" className={styles.button}>
            <span className={styles.actualtext}>&nbsp;{ButtonText}&nbsp;</span>
            <span className={styles.hovertext} aria-hidden="true">&nbsp;{ButtonText}&nbsp;</span>
        </button>
        </>
    )
}
