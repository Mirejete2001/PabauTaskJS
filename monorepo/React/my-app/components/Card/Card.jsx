import styles from './Card.module.css'

export default function Card({ obj, isList = false, fn = () => { } }) {
    return <div onClick={fn} className={isList ?styles.list : styles.card}>
        <img className={ isList? styles.listImage:styles.cardImage} src={obj.img} />
        <span>
        <p className={styles.title}>{obj.name}</p>
        {!isList&&<hr className={styles.line} />}
        <p className={styles.description}>{obj.description}</p>

        </span>
        <p className={styles.icon}> {isList? '↔': null}  </p>
    </div>
}