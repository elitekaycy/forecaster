import React, { useContext, useRef } from 'react'
import search from '../Svg/Search.svg'
import { QueryStoreContext } from '../Context/QueryStore'

function SearchBarMain() {
    const [query, setquery] = useContext(QueryStoreContext)
    const InputRef = useRef(null)
 
    const handleQuery = (e) => {
        e.preventDefault()
        InputRef.current.focus()
        setquery({...query, q: e.target.value})
    }

    const { q } = query
    return (
        <div className="searchBarmain p-1">
            <h3 className='text-center text-white'>{new Date().toDateString()}</h3>
            <div className="search-bar d-flex justify-content-between align-items-center p-3">
               <div className="ml-2">
                   <input 
                    ref={el => InputRef.current = el}
                   className="inputSearch"
                    type="text" 
                    placeholder="Search city or state here" 
                    value={q}
                    onChange={(e) => {handleQuery(e)}}

                    />    
            </div>
               <div className="searchLogo ml-2 ">
                <img src={search} alt="searchIcon" style={{width: '100%', height: '100%'}}/>
               </div>
            </div>
        </div>
    )
}

export default SearchBarMain
