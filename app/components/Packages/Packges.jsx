"use client";

import './style.scss'
import {BsTrainFront} from 'react-icons/bs'
import { useState, useEffect} from 'react'
import TripOptions from '../TripOptions/TripOptions';

const Packages = () => {

  const [active, setActive] = useState('flight');
  
  return (
    <div className="packages">
      <div className='packages-section-inner'>
        <div className='package-nav'>
          <ul>
            <li 
              className={active === 'hajj'? 'active': ''}
              onClick={() => setActive('hajj')}
            >
              <img src='./icons/Hajj.png'/>
              <p>Hajj & Umrah</p>
            </li>
            <li
              className={active === 'flight'? 'active': ''}
              onClick={() => setActive('flight')}
            >
              <img src='./icons/Plane.png'/>
              <p>Flight</p>
            </li>
            <li
              className={active === 'hotel'? 'active': ''}
              onClick={() => setActive('hotel')}
            >
              <img src='./icons/Hotel.png'/>
              <p>Hotel</p>
            </li>
            <li
              className={active === 'visa'? 'active': ''}
              onClick={() => setActive('visa')}
            >
              <img src='./icons/Visa.png'/>
              <p>Visa</p>
            </li>
            <li
              className={active === 'tours'? 'active': ''}
              onClick={() => setActive('tours')}
            >
              <img src='./icons/Tours.png'/>
              <p>Tours</p>
            </li>
            <li
              className={active === 'buses'? 'active': ''}
              onClick={() => setActive('buses')}
            >
              <img src='./icons/Bus.png'/>
              <p>Buses</p>
            </li>
            <li
              className={active === 'train'? 'active': ''}
              onClick={() => setActive('train')}
            >
              <BsTrainFront size={34} color={'#4AB44980'}/>
              <p>Train</p>
            </li>
          </ul>
        </div> 

        <div className='trip-nav'>
          <ul>
            <li>
              <p>One Way</p>
            </li>
            <li className='active'>
              <p>Round Trip</p>
            </li>
            <li>
              <p>Multi City</p>
            </li>
          </ul>
        </div>

        <TripOptions/>
        <img className='whatsapp-icon' src='./icons/Whatsapp.png'/>
      </div>
    </div>
  )
}

export default Packages