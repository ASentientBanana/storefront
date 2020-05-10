import React,{useEffect,useRef,useState,createRef} from 'react'
import * as M from 'materialize-css';

const Carousel = () => {
    const carouselRef = createRef<HTMLDivElement>() 
    let carouselInstance = useRef<M.Carousel>();
    useEffect(()=>{
        if (carouselRef.current) {
			carouselInstance.current = M.Carousel.init(carouselRef.current, {
				numVisible: 1,
				indicators: true,
				noWrap: false,
                fullWidth: true,
			});
		}
    },[])

    return(
  
      <div className="carousel carousel-slider" ref={carouselRef} onClick={()=>carouselInstance.current?.next()}>
        <img className="carousel-item" src="https://lorempixel.com/800/400/food/1"/>
        <img className="carousel-item" src="https://lorempixel.com/800/400/food/2"/>
        <img className="carousel-item" src="https://lorempixel.com/800/400/food/3"/>
        <img className="carousel-item" src="https://lorempixel.com/800/400/food/4"/>
      </div>
            
    )
}

export default Carousel;
