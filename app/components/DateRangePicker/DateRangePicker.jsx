"use client"

import './style.scss' 
import { DatePicker } from 'antd'
import { useState, useRef } from 'react'
import moment from 'moment'

const {RangePicker} = DatePicker
const today = moment().format('DD MMMM YYYY')

const DateRangePicker = () => {

  const [date, setDate] = useState([today, today])
  const rangeInput = useRef(null)

  const handleClick = () => {
    if(rangeInput.current){
      document.querySelector('.range').click()
    }
  }

  const updateDate = (values) => {
    setDate([
      moment(values[0])['_i'].format('DD MMMM YYYY'), 
      moment(values[1])['_i'].format('DD MMMM YYYY')
    ]);
  }

  return (
    <div className='date-range'>
      <div className='date-range-click' onClick={handleClick}>
        <div className='left'>
          <p>Deport To</p>
          <div className='start'>{date[0]}</div>
        </div>
        <div className='right'>
          <p>Return To</p>
          <div className='end'>{date[1]}</div>
        </div>
      </div>
      <RangePicker className='range' ref={rangeInput} style={{visibility:'hidden'}}
        onChange={(values) => {
          updateDate(values)
        }}
      />
    </div>
  )
}

export default DateRangePicker