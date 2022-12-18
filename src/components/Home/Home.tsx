import React, { FC } from "react"
import CardList from "../Card/CardList"
import style from './Home.module.css'

const Home: FC = () => {
    return(
        <div className={style.container}>
            <h1>Apps Container</h1>
            <p>Apps Container is an application, Where it has other applications to serve
                user as a service. User can select any application and Apps Container will 
                render the app on DOM.
            </p>
            <CardList />
        </div>
    )
}

export default Home