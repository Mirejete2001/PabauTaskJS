import styles from './Header.module.css'
export default function Header({currentStep, stepsLength}) {
    return (
        <div className={styles.header}>
            <h2>Choose Service</h2>
            <p className={styles.par}>Step <span className={styles.currentStep}> {currentStep} </span> / {stepsLength}</p>
        </div>
    )
}