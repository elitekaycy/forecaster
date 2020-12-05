/* this Component Contains the info of the Current Active Component */

import React, {useRef, useEffect} from 'react'
import anime from 'animejs'


function CurrentInfo(props) {
    const animatetemp = useRef(null)
    const animateweather = useRef(null)
    const animatepressure = useRef(null)
    const animatehumidity =useRef(null)


    useEffect(() => {
       anime({
        targets: [animatetemp.current, animateweather.current, animatepressure.current, animatehumidity.current],
        translateX: [-10, 10],
        delay: anime.stagger(100),
        duration:  3000,
        opacity: [0, 1]
       })
    })

    const {temp, humidity, pressure} = props.info
             

    return (
        <div className="Currentinfo">
            {/* {console.log(props.info)}
            {console.log(props.weather)}
            {console.log(props.weatherdescription)} */}
            <div  ref={el => {animatetemp.current = el}}>
            <div className="animatetemp d-flex align-items-center">
                <div className="temp text-white">Temperature</div>
             <div className=" temp-info text-white ml-4">{temp}</div>
            </div>
            <div className="animatetemp mb-2" style={{width: 180, color: 'red', height: 2, zIndex: 1, backgroundColor: 'red'}}></div>
            </div>

            <div ref={el => animateweather.current = el}>
            <div className="animateweather d-flex align-items-center">
                <div className="weather text-white">Weather</div>
             <div className="weather-info text-white ml-4"> {props.weather} | {props.weatherdescription}</div>
            </div>
            <div className="animateweather mb-2" style={{width: 160, color: 'red', height: 2, zIndex: 1, backgroundColor: 'red'}}></div>
            </div>

            <div  ref={el => animatepressure.current = el}>
            <div className="animatepressure d-flex align-items-center">
                <div className="pressure text-white">Pressure</div>
           <div className="pressure-info text-white ml-4" >{pressure}</div>
            </div>
            <div className="animatepressure mb-2"  style={{width: 140, color: 'red', height: 2, zIndex: 1, backgroundColor: 'red'}}></div>
            </div>

           <div ref={el => animatehumidity.current = el}>
            <div className="animatehumidity d-flex align-items-center">
                <div className="humidity text-white">Humidity</div>
            <div className="humidity-info text-white ml-4" >{humidity}</div>
            </div>
            <div className="animatehumidity mb-1" style={{width: 120, color: 'red', height: 2, zIndex: 1, backgroundColor: 'red'}}></div>
        </div>
        </div>
    )
}

export default CurrentInfo
