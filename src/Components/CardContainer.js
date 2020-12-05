import React from 'react'

function CardContainer(props) {
    return (
        <div className="cardCompmain d-flex justify-content-center align-items-center flex-wrap"> 
            {props.children}
        </div>
    )
}

export default CardContainer
