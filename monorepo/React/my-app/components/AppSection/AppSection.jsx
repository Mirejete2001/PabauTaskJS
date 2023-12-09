import styles from './AppSection.module.css'
export default function AppSection({no}) {
    return (
        <div className={styles.section}>
            <p>Not sure about your consulation type? Please call <span className={styles.important}>
                {no}
                
                </span></p>
        </div>
    )
}