import imgVuota from '../../src/place-holder-img.png'
import style from "./Card.module.css"

export default function Card({ movies = [] }) {
    return (
        <>

            {movies.length > 0 ? (
                movies.map((movie) => (
                    <figure className={style.figure} key={movie.id}>
                        <div className={style.containerImage}>
                            <img className={style.image} src={imgVuota} alt="" />
                        </div>
                        <div>Titolo: {movie.title}</div>
                        <div>Titolo Originale: {movie.original_title}</div>
                        <div>Linguaggio: {movie.original_language}</div>
                        <div>Voti: {movie.vote_average} </div>
                    </figure>
                ))

            )
                : (<p>No movies found.</p>)}

        </>
    )
}