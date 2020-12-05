import React, { useEffect, useRef } from 'react'
import sunny from  '../Svg/sunny.svg'
import rainy from '../Svg/rainy.svg'
import clouds from '../Svg/clouds.svg'
import mist from '../Svg/mist.svg'
import anime from 'animejs'

function WeatherClimate(prop) {
    const logoAnimation = useRef(null)

    const getlogo = () => {
        const { main } = prop
        
        switch(main)
        {
            case 'Clear':
                return sunny
            case 'Clouds':
                return clouds
            case 'Rain':
                return rainy
            default: 
               return mist
        }
    }

    useEffect(() => {
        anime({
            targets: logoAnimation.current,
            translateX: 90,
            direction: 'alternate',
            loop: true,
            easing: 'linear',
            duration: 2000

        })
    })

    return (
        <div className="climate" ref={el => {logoAnimation.current = el}} >
            <div className="text-whte">
             <img className="img-fluid" src={getlogo()} style={{width: 50, height: 50}} alt="rainy or sunny" />
            </div>
        </div>
    )
}

export default WeatherClimate
