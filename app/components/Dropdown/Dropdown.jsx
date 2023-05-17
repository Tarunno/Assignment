"use client";

import './style.scss'
import { useState } from "react";

const Dropdown = ({name, values}) => {

  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(values[0])

  return (
    <div>
      <div className={'dropdown-container ' + active} 
        onClick={() => setActive(!active)}
      >
        <p className="primary">{name}</p>
        <p className="secondary">{selected}</p>
      </div>
      {active?
        <div className='menu'>
          {values.map((val, index) => (
            <p key={index} className={
              selected === val? 'options selected': 'options'
            }
            onClick={() => setSelected(val)}
          >{val}</p>
          ))}
        </div>
        :null
      }
      <input name={name} value={selected.replace('\t', ' ')} style={{visibility:'hidden'}}/>
    </div>
  )
}

export default Dropdown