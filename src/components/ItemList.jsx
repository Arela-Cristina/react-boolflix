import Card from "./Card"

export default function ItemList({ items = [], title }) {
    console.log(`Rendering of: ${title}`, items)
    return (

        <section>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <Card item={item} />
                        </li>
                    ))}
                </ul>
            </div>


        </section>
    )
}