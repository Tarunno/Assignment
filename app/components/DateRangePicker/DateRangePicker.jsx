import './style.scss' 
import { DatePicker } from 'antd'
import { useState } from 'react'
const {RangePicker} = DatePicker

const DateRangePicker = () => {

  const [date, setDate] = useState([])

  const handleClick = () => {
    const r = document.querySelector('.range')
    r.click();
  }

  const months = {
    '01': 'Jan', '02': 'Feb', '03': 'Mar', '04':'Apr', '05':'May', '06':'Jun',
    '07':'Jul', '08':'Aug', '09':'Sep', '10':'Oct', '11':'Nov', '12':'Dec'
  }

  const updateDate = () => {
    const dates = document.querySelectorAll('.ant-picker-input')
    const start_date = document.querySelector('.start')
    const end_date = document.querySelector('.end')
    setDate([dates[0].childNodes[0].value, dates[1].childNodes[0].value])
    start_date.innerHTML = dates[0].childNodes[0].value.split('-')[2] + ' ' + months[dates[0].childNodes[0].value.split('-')[1]] + ' ' + dates[0].childNodes[0].value.split('-')[0]
    end_date.innerHTML = dates[1].childNodes[0].value.split('-')[2] + ' ' + months[dates[1].childNodes[0].value.split('-')[1]] + ' ' + dates[1].childNodes[0].value.split('-')[0]
  }

  return (
    <div className='date-range'>
      <div className='date-range-click' onClick={() => handleClick()}>
        <div className='left'>
          <p>Deport To</p>
          <div className='start'>15 May 2023</div>
        </div>
        <div className='right'>
          <p>Return To</p>
          <div className='end'>15 May 2023</div>
        </div>
      </div>
      <RangePicker className='range' style={{visibility:'hidden'}}
        onChange={() => {
          updateDate()
        }}
      />
    </div>
  )
}

export default DateRangePicker