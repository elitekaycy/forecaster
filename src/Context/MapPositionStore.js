/*
Responsible for holding the map longitude and latitude per search
*/

import React from 'react'
const { useState } = React
const MapPositionContext = React.createContext()

function MapPositionStore(props) {
    const [position, setPosition] = useState([51.505, -0.09])
    return (
        <MapPositionContext.Provider value={[position, setPosition]}>
            {props.children}
        </MapPositionContext.Provider>
    )
}

export { MapPositionStore, MapPositionContext }
