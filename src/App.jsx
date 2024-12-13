import './App.css'
import GlobalContext from './context/GlobalContext'
import axios from 'axios'
import { useState } from 'react'
import {BASE_URI} from "../src/config"
import { API_KEY } from './key'
import Header from './components/Header'
import Index from './pages'

function App() {

  const [tvSeries, setTvSeries] = useState([]) //stato ricerche serie(query) 
  const [movies, setMovies] = useState([]) //stato  ricerche movie(query) 
  const [query, setQuery] = useState('The Exorcist') //stato  valore della ricerca(query)


  function fetchData() {
    // console.log("Fetching Data for", query)
    console.log("Fetching Data for Movies", movies)
    console.log("Fetching Data for Series", tvSeries)

    axios // chiamata Axios for movie
      .get(`${BASE_URI}search/movie?${API_KEY}&query=${query}`)
      .then((response) => {
        console.log("Movies response:", response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });

    axios // chiamata Axios for TV series
      .get(`${BASE_URI}search/tv?${API_KEY}&query=${query}`)
      .then((response) => {
        console.log("TV Series response:", response.data.results);
        setTvSeries(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  // // aggiornamento dipende di  ogni rendering della query

  return (

    <GlobalContext.Provider value={{ movies, tvSeries, query, setQuery, fetchData }}>
      <Header />
      <Index />
    </GlobalContext.Provider>


  )
}

export default App
