import WineImageComponent from "./WineImageComponent"
import WineConsumedProgressBarComponent from "./WineConsumedProgressBarComponent"

const WineCardComponent = (props) => {
    
    return (
        <div className="wine">
            <WineImageComponent
                imageUrl={props.wine.imageUrl}
                imageName={props.wine.imageName}
                isNew={props.wine.isNew}
            />
            
            {props.wine.amountConsumed && 
                <WineConsumedProgressBarComponent
                    min={0}
                    max={100}
                    amountConsumed={props.wine.amountConsumed}
                />
            }
        </div>
    )
}

export default WineCardComponent