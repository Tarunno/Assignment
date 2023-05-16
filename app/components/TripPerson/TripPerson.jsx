"use client"

import './style.scss'
import { useState, useEffect } from "react"
import {BsChevronDown, BsCheck} from 'react-icons/bs'
import {BiPlus, BiMinus} from 'react-icons/bi'

const TripPerson = () => {

  const [active, setActive] = useState(false)
  const [cls, setCls] = useState(1)
  const [person, setPerson] = useState(1)
  const classes = ['Economy Class', 'Premium Economy', 'Business Class', 'First Class']

  useEffect(() => {
    if(person <= 1){
      setPerson(1);
    }
  }, [person])
  
  return (
    <div className='trip-person-container'>
      <div className={'trip-person ' + active}
        onClick={() => setActive(!active)}
      >
        <pre className="primary">Passengers & Cabin Class    {classes[cls-1]}<BsChevronDown color={'rgba(74, 180, 73, 0.8)'}/></pre>
        <p className="secondary">{person === 1? person + ' Person': person + ' Persons'}</p>
      </div>
      {active?
        <div className='menu'>
          <p className='heading'><span style={{padding:'5px'}}></span>Passengers</p>
          <section className='sub-menu'>
            <p className="primary">Ifant</p> 
            <p className='secondary'>0-23 months at the time of travel</p>
            <section className="increment-decrement">
              <BiPlus size={25} color={'#4AB449'} onClick={() => setPerson(person+1)}/>
              <BiMinus size={25} color={'#4AB449'} onClick={() => setPerson(person-1)}/>
            </section>
          </section>
          <section className='sub-menu'>
            <p className="primary">Children</p> 
            <p className='secondary'>2-11 years at the time of travel</p>
            <section className="increment-decrement">
              <BiPlus size={25} color={'#4AB449'} onClick={() => setPerson(person+1)}/>
              <BiMinus size={25} color={'#4AB449'} onClick={() => setPerson(person-1)}/>
            </section>
          </section>
          <section className='sub-menu'>
            <p className="primary">Adults</p> 
            <p className='secondary'>12 years and above</p>
            <section className="increment-decrement">
              <BiPlus size={25} color={'#4AB449'} onClick={() => setPerson(person+1)}/>
              <BiMinus size={25} color={'#4AB449'} onClick={() => setPerson(person-1)}/>
            </section>
          </section>
          <br/>
          <p className='heading'><span style={{padding:'5px'}}></span>Cabin Class</p>
          <section className='classes'>
            <li onClick={() => setCls(1)}><p>Economy Class</p> {cls===1?<BsCheck size={27} color={'#4AB449'}/>:null}</li>
            <li onClick={() => setCls(2)}><p>Premium Economy</p> {cls===2?<BsCheck size={27} color={'#4AB449'}/>:null}</li>
            <li onClick={() => setCls(3)}><p>Business Class</p> {cls===3?<BsCheck size={27} color={'#4AB449'}/>:null}</li>
            <li onClick={() => setCls(4)}><p>First Class</p> {cls===4?<BsCheck size={27} color={'#4AB449'}/>:null}</li>
          </section>
        </div>
        :null
      }
    </div>
  )
}

export default TripPerson