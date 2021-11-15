import React from 'react'
import Wine from './Wine'

const WineList = ({wines}) => {

    return (
        <ul>
            {
                wines && wines.length > 0 && wines.map(wine => {
                    return <Wine key={wine.id} wine={wine}/>
                })
            }
        </ul>
    )
}

export default WineList
