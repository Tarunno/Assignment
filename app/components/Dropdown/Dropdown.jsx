"use client";

import './style.scss'
import { useState } from "react";

const Dropdown = ({values}) => {

  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(values[0])

  return (
    <div>
      <div className={'dropdown-container ' + active} 
        onClick={() => setActive(!active)}
      >
        <p className="primary">Flying From</p>
        <p className="secondary">City or Airport</p>
      </div>
      {active?
        <div className='menu'>
          {values.map((val) => (
            <p className={
              selected === val? 'options selected': 'options'
            }
            onClick={() => setSelected(val)}
          >{val}</p>
          ))}
        </div>
        :null
      }
    </div>
  )
}

export default Dropdown