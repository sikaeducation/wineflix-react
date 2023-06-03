import WineCard from "./WineCard";

const WineList = (props) => {
    return (
        <section className="category">
            <h2>{props.title}</h2>
            <ul>
                {props.wineList.map(wine => (
                    <li key={wine.id}>
                        <WineCard wine={wine} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default WineList;