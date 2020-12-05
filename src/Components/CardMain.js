import React, {useEffect, useRef} from 'react'
import CardComponent from './CardComponent'
import CardContainer from './CardContainer'
import anime from 'animejs'

/*Images */
import midday from '../imgs/midday.jpg'
import sunny from '../imgs/sunny.jpg'
import drizzle from '../imgs/drizzle.jpg'
import windy from '../imgs/windy.jpg'

function CardMain(props) {
    const tempRef = useRef(null)
    const weatherRef = useRef(null)
    const pressureRef =  useRef(null)
    const humidityRef = useRef(null)

    useEffect(() => {
      var mytimeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
      })

      mytimeline.add({
          targets: tempRef.current,
          scale: [1, 1.2, 1],
          duration: 300,
          easing: 'linear'
         })
         .add({
            targets: weatherRef.current,
            scale: [1, 1.2, 1],
            duration: 250,
            easing: 'linear'
         })
         .add({
            targets: pressureRef.current,
            scale: [1, 1.2, 1],
            duration: 200,
            easing: 'linear'
         })
         .add({
            targets: humidityRef.current,
            scale: [1, 1.2, 1],
            duration: 150,
            easing: 'linear'
         })
    })

    const { temp, humidity } = props.weatherdetails
    const { deg } = props.wind

    return (
       <CardContainer>
          {/* {console.log(props.weatherdetails)}
          {console.log(props.weatherCurrent)}
          {console.log(props.weatherdescription)} */}
            <CardComponent image={midday} info="tempurature"   infovalue={temp}  Ref={el => {tempRef.current = el}}/>
           <CardComponent image={sunny} info="weather" infovalue={props.weatherCurrent} Ref={el => {weatherRef.current = el}}/>
            <CardComponent image={windy} info="Wind"  infovalue={deg} Ref={el => {pressureRef.current = el}}/>
            <CardComponent image={drizzle} info="humidity" infovalue={humidity} Ref={el => {humidityRef.current = el}}/>
       </CardContainer>
    )
}

export default CardMain
