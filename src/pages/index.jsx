import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URI } from "../../src/config"
import { API_KEY } from "../../src/key"
import Card from "../components/Card"
import style from "./Index.module.css"


export default function Index() {

    const [query, setQuery] = useState('') //stato  valore della ricerca(query)

    const [movies, setMovies] = useState([]) //stato per ricerche(query) trovate

    const handleChange = (e) => {
        setQuery(e.target.value) // gestice la ricerca de la query
    };

    const handleSearch = () => {
        if (!query) return; // if query = false... finisce qui 

        axios //altrimenti facciamo la chiamata Axios
            .get(`${BASE_URI}search/movie?${API_KEY}&query=${query}`)
            .then((response) => {
                setMovies(response.data.results);
                console.log(response.data.results)
            })
            .catch((err) => {
                console.error(err);
            })

    };

    useEffect(() => {
        handleSearch()
    }, [])
    // aggiornamento dipende di  ogni rendering della query

    return (
        <>
            <section>
                <input
                    type="search"
                    value={query}
                    onChange={handleChange}
                    placeholder="Cerca un film" />
                <button onClick={handleSearch}>Cerca</button>
            </section>

            <section className={style.cardContainer}>
                <Card movies={movies} />
            </section>


        </>
    )
}