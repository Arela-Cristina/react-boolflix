import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

export default function Search() {

    const { query, setQuery, fetchData } = useContext(GlobalContext)

    function handleChange(e) {
        setQuery(e.target.value) //catturiamo il valore
    }

    function handleSearch(e) {
        e.preventDefault()

        //chiamata Axios
        fetchData()
    }

    return (

        <section>
            <input
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Cerca un film" />
            <button onClick={handleSearch}>Cerca</button>
        </section>
    )
}