
const WineConsumedProgressBar = (props) => {
    return (
    <div className="amount-consumed">
        <progress min={props.min} max={props.max} value={props.progress}></progress>
    </div>
    )
}

export default WineConsumedProgressBar;