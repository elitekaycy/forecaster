/*

Search card component holds template for the search bar

*/

import React, { useContext} from 'react'
import {CurrentStateContext} from '../Context/CurrentState'
import { QueryStoreContext } from '../Context/QueryStore'

function SearchCardComponent(props) {

    const { main, name, weather }  = props.query
    const CurrentStateSet = useContext(CurrentStateContext)
    const query = useContext(QueryStoreContext)

    const handleCurrentQuery = (e) => { 
        e.preventDefault()
        CurrentStateSet[1](props.query)
        query[1]('')

    }
      
    return (
        <div className="SearchCardSearchitem" onClick={handleCurrentQuery} style={{cursor: 'pointer'}}>
            <div className="jumbotron" style={{backgroundColor: '#192A56', color: 'white'}}>
               <div className="d-flex justify-content-around flex-wrap align-items-end">
                  <div style={{fontSize: 35}}>{name}</div>
                   <div style={{fontSize: 25}} >Temp: {main.temp}</div>
                 <div style={{fontSize: 25}}>Weather: {weather[0].main}</div>
               </div>
            </div>    
        </div>
    )
}

export default SearchCardComponent
