import './Card.css'

export default function Card({obj, isList = false, fn = () => {}}) {
    return <div onClick={fn} className={isList ? "list" : "card"}>
        <img src={obj.img} />
        <p>{obj.name}</p>
    </div>
}