/*
This Store Contains the query state for search
*/

import React, {useState} from 'react'

const QueryStoreContext = React.createContext(null)

function QueryStore(props) {
    const [query, setquery] = useState({q: ''})

    return (
       <QueryStoreContext.Provider value={[query, setquery]}>
           {props.children}
       </QueryStoreContext.Provider>
    )
}

export { QueryStore, QueryStoreContext }
