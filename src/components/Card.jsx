import imgVuota from '../../src/place-holder-img.png'
import languages from '../language'
import Stars from './Vote'
import style from "./Card.module.css"

export default function Card({ item }) {

    console.log("Rendering Card for item:", item)

    const { title, original_title, vote_average, original_language, poster_path } = item

    return (

        <figure className={style.figure}>
            <div className={style.image_figure}>
                <img className={style.image}
                    src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : imgVuota} alt="" />
            </div>
            <div className={style.body_figure}>
                <div>Titolo: {title}</div>
                <div>Titolo Originale: {original_title}</div>
                {
                    languages[original_language] ?
                        <img src={languages[original_language]} height={20} alt="" /> :
                        <p>{original_language}</p>
                }

                <div>Voti: {vote_average} </div>
                <Stars vote={vote_average} />
            </div>
        </figure>

    )
}