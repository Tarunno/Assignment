"use client"

import './style.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr'


const Carosuel = ({items}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <GrLinkPrevious size={40}/>,
    nextArrow: <GrLinkNext size={40}/>
  }

  return (
    <Slider {...settings} className='slider'>
      {items.map((item) => {
        return <div kye={item.id} className='card'>
        <div className='inner'>
          <img src={item['img']}/>
          <div className='info'>
            <p>{item['name']}</p>
            <p>{item['cost']}Tk</p>
          </div>
        </div>
      </div>
      })}
    </Slider>
  )
}

export default Carosuel