import React from "react"
import style from './Card.module.css'
import { NavLink } from "react-router-dom"

interface CardInfoProps {
    item: {id: string, title: string, description: string, path: string}
}

const Card: React.FC<CardInfoProps> = (props) => {
    const { item: {title, description, path} } = props
    return(
        <NavLink to={`${path}`} className={style.aTag}>
            <div className={style.card}>
                <h2>{title}</h2>
                <p>{description}</p>
                <button className={style.btn}>Launch App</button>
            </div>
        </NavLink>
    )
}

export default Card 