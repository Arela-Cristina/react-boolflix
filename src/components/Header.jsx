import style from "./Header.module.css"
import Search from "./Search"
import logo from "../assets/logo/logo.png"

export default function Header() {
    return (

        <section className={style.container}>
            <img src={logo} alt="logo Boolflix" />
            <div><Search /></div>
        </section>
    )
}