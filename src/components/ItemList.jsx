import Card from "./Card"
import style from "./ItemList.module.css"

export default function ItemList({ items = [], title }) {
    console.log(`Rendering of: ${title}`, items)
    return (

        <section className={style.main_container}>
            <div>
                <h2 className={style.title}>{title}</h2>
            </div>
            <div className={style.ul_container}>
                <ul className={style.container}>
                    {items.map((item) => (
                        <li className={style.list} key={item.id}>
                            <Card item={item} />
                        </li>
                    ))}
                </ul>
            </div>


        </section>
    )
}