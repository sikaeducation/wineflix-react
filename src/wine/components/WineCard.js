import WineImage from "./WineImage"
import WineConsumedProgressBar from "./WineConsumedProgressBar"

const WineCard = (props) => {
    
    return (
        <div className="wine">
            <WineImage
                imageUrl={props.wine.imageUrl}
                imageName={props.wine.imageName}
                isNew={props.wine.isNew}
            />
            
            {props.wine.progress && 
                <WineConsumedProgressBar
                    min={0}
                    max={100}
                    progress={props.wine.progress}
                />
            }
        </div>
    )
}

export default WineCard;