import styles from './AppButon.module.css'
export default function AppButton({click, children}){
    return <button className={styles.button} onClick={click}> {children} </button>
}