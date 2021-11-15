import WineCardComponent from "../wine/components/WineCardComponent";

const SectionComponent = (props) => {
    return (
        <section className="category">
            <h2>{props.title}</h2>
            <ul>
                {props.wineList.map((wine, index) => (
                    <li key={index}>
                        <WineCardComponent wine={wine} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default SectionComponent;