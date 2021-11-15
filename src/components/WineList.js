import React from 'react'
import Wine from './Wine'

const WineList = ({wines}) => {

    return (
        <>
        <ul>
            {
                wines.map(wine => {
                    return <Wine wine={wine}/>
                })
            }
        </ul>
        </>
    )
}

export default WineList
