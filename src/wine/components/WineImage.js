
const WineImage = (props) => {
    return (
        <>
            <img src={props.imageUrl} alt={props.imageName} />
            {props.isNew && <span className="new-badge">New!</span>}
        </>
    )
}

export default WineImage;