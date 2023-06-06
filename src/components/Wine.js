import React from 'react'

const Wine = ({wine: {id, imageUrl, label, progress, isFinished}}) => {
    return (
        <li>
            <div className="wine">
            <img src={imageUrl} alt={label} />
            { !isFinished &&
                <div className="amount-consumed">
                    <progress min="0" max="100" value={progress}></progress>
                </div>
            }
            </div>
        </li>
    )
}

export default Wine
