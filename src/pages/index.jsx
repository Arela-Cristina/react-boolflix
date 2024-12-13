import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import  ItemList from "../components/ItemList"
// import style from "./Index.module.css"


export default function Index() {

    const { movies, tvSeries } = useContext(GlobalContext)
    console.log("INDEX Rendering movies:", movies);
    console.log("INDEX Rendering tvSeries:", tvSeries);

    return (
        <>

            <section>
                <ItemList title="Movies" items={movies} />
                <ItemList title="tvSeries" items={tvSeries} />
            </section>


        </>
    )
}