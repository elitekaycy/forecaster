/* shows tempurature cards in  a box */

import React from 'react'

function CardComponent(prop) {
    return (
         <div className="CardComp d-flex justify-content-center align-items-center flex-column" ref={prop.Ref}>
         <figure className="c4-izmir c4-image-zoom-out">
        <img src={prop.image} alt="NEW ALT" style={{width: '100%', height: '100%'}}/>
        <figcaption> 
            <h4 style={{fontSize: 20}}>
               {prop.info}
            </h4>
            <h5 style={{fontSize: 15}}>{prop.infovalue}</h5>
        </figcaption>
        </figure>

         </div>
       
    )
}

export default CardComponent
