import React,{ useContext, useRef, useEffect, useState } from 'react'
import { QueryStoreContext } from '../Context/QueryStore'
import anime from 'animejs'
import SearchCardComponent from '../Components/SearchCardComponent'
import search from '../Svg/Search.svg'
//import { CurrentStateContext } from '../Context/CurrentState'
import Axios from 'axios'
import { CurrentStateContext } from '../Context/CurrentState'
import cancel from '../Svg/cancel.svg'

function Search() {
    const [query, setquery] = useContext(QueryStoreContext)
    const Currentstate = useContext(CurrentStateContext)
    const [querydetail, setquerydetail] = useState('')
    const [isloading, setisloading] = useState(false)
    const [error, seterror] = useState('')
    //const [Currentstate, setCurrentState] = useContext(CurrentStateContext)
    const searchRef = useRef(null)
    const searchBox = useRef(null)
    const InputBox = useRef(null)
    

    const handleQuery = (e) => {
        e.preventDefault()
        setquery({...query, q: e.target.value})
    }
    const { q } = query

    const loadQuery = (e) => {
        e.preventDefault()
        setisloading(true)
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=8dc78621783c5b884876b23e39b86f78`)
            .then(response => {
                setquerydetail(response.data)
                seterror('')
                setisloading(false)
            })
            .catch(err => 
                {
                    seterror('Error loading data or Invalid data, Try again')
                    setisloading(false)
                }
            )
    }

    const cancelSubmit = (e) => {
        e.preventDefault()
        setquery('')
    }

    useEffect(() => {
       anime({
           targets: [searchBox.current, InputBox.current],
           translateY: [5, 0],
           delay: anime.stagger(50) 
       })
      

       searchRef.current.focus()


    }, [])

    return (
        <form onSubmit={(e) => loadQuery(e)}>
            <div className="Close" onClick={(e) => cancelSubmit(e)} style={{width: 20, height: 0, cursor: 'pointer'}} >
            <img src={cancel} alt="cancelsearch" style={{width: '100%', height: '100%', color: 'white'}}/>
            </div>
        <div>
        <div ref={el => searchBox.current = el} className="SearchPageSearch d-flex justify-content-center align-items-center flex-column flex-wrap">
        <div ref={el => InputBox.current = el} className="SearchPageSearchbar d-flex flex-row align-items-center justify-content-between ">
            <div className="SearchPageInputSearch">
                <input 
                className="SearchPageInput p-2"
                type="text" 
                placeholder="Search city or state here" 
                value={q}
                onChange={(e) => {handleQuery(e)}}
                ref={el => searchRef.current = el}
                />   
            </div>
            <div className="SearchpageSearchlogo text-white mr-3" onClick={(e) => loadQuery(e)} style={{cursor: 'pointer', width: 40, height: 40}}>
            <img src={search} alt="searchIcon" className='hoversearch' style={{width: '100%', height: '100%'}}/>
            </div>
    
         </div>
         <div>
    <div className="text-white pt-5">Current State - {Currentstate[0].name}</div>
         </div>
         </div>
         <div className="container mt-3">
             {isloading ? 
             <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </div>
                 : 
                 querydetail !== '' ? <SearchCardComponent query={querydetail}/> : 
                  <div className="d-flex justify-content-center mt-4 font-weight-bold" style={{fontSize: 25}}>
                     <div> {error ? <div className="alert alert-danger" style={{fontSize: 15, fontWeight: 'lighter'}}>{error}</div> : 'No query Yet '}</div>
                 </div>
                 }
         </div>
         </div>
         </form> 
    )
}

export default Search
