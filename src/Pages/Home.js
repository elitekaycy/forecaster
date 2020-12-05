/* mystarter page */


import React,{useContext} from 'react'
import {QueryStoreContext} from '../Context/QueryStore'
import Search from './Search'
import { Main } from './Main'

function Home() {
    const [query, setquery] = useContext(QueryStoreContext)
    const { q } = query
    return (
        <div>
         {q ? <Search /> : <Main />}
        </div>
    )
}

export default Home
