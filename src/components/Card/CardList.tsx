import React from "react"
import Card from "./card"
import cardsInfo from './cardsInfo.json'
import style from './Card.module.css'

const CardList: React.FC = () => {
    return(
        <div className={style.cardContainer}>
            {cardsInfo.map(item => {
                return <Card key={item.id} item={item} />
            })}
        </div>
    )
}

export default CardList