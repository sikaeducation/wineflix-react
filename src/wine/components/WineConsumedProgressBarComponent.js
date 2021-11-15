
const WineConsumedProgressBarComponent = (props) => {
    return (
    <div className="amount-consumed">
        <progress min={props.min} max={props.max} value={props.amountConsumed}></progress>
    </div>
    )
}

export default WineConsumedProgressBarComponent;