import imgVuota from '../../src/place-holder-img.png'
import style from "./Card.module.css"

export default function Card({ item }) {

    console.log("Rendering Card for item:", item)

    const { title, original_title, vote_average, original_language, poster_path } = item

    return (

        <figure className={style.figure}>
            <div className={style.image_figure}>
                {/* {(poster_path) ?
                    <img className={style.image} src={poster_path} alt="" /> :*/}
                <img className={style.image} src={imgVuota} alt="" />
                {/* } */}

            </div>
            <div className={style.body_figure}>
                <div>Titolo: {title}</div>
                <div>Titolo Originale: {original_title}</div>
                <div>Linguaggio: {original_language}</div>
                <div>Voti: {vote_average} </div>
            </div>
        </figure>

    )
}