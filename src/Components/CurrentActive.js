/*
this component displays the current state or city selected
*/

import React, {useEffect, useRef} from 'react'
import anime from 'animejs'

function CurrentActive(prop) {
    const cuRRent = useRef(null)
   
    useEffect(() => {
        anime({
            targets: cuRRent.current,
            scaleX: [0,1.05]
    
        })
    })

    return (
        <div className="CurrentActive" ref={el => cuRRent.current = el}>
           <div className="d-flex align-items-center">
               <div className="mr-2 rounded-circle" style={{color: 'green', width: 10, height: 10, backgroundColor: '#45CE30'}}></div>
            <div className="Current">{prop.city}</div>
           </div>
        </div>
    )
}

export default CurrentActive
