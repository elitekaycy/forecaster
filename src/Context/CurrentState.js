import React, { useState, useEffect } from 'react'
import {Sampledata} from '../Sampledata'
import axios from 'axios'

const CurrentStateContext = React.createContext(null)

function CurrentState(props) {
    const [Currentstate, setCurrentState] = useState(Sampledata)

    useEffect(() => {
        axios.get('https://freegeoip.app/json/').then((response) => {
            const { city } = response.data
            // console.log(response.data)
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dc78621783c5b884876b23e39b86f78`)
            .then(response => {
                setCurrentState(response.data)
            })
            //setquery({...query, q: city})
        })
    }, [])

    return (
       <CurrentStateContext.Provider value={[Currentstate, setCurrentState]}>
          {props.children}
       </CurrentStateContext.Provider>
    )
}
 
export { CurrentState, CurrentStateContext }
