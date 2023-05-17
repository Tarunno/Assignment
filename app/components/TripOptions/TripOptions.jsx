import './style.scss'
import Dropdown from '../Dropdown/Dropdown'
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import TripPerson from '../TripPerson/TripPerson';
import Button from '../Button/Button';

const airports_1 = [
  'Shah Amanat International Airport, Chittagong',
  'Osmany International Airport, Sylhet',
  "Cox's Bazar Airport,	Cox's Bazar",
  'Jessore Airport,	Jashahor',
  'Barisal Airport,	Barisal'
];

const airports_2 = [
  'Hazrat Shahjalal International Airport, Dhaka',
  'Osmany International Airport, Sylhet',
  "Cox's Bazar Airport,	Cox's Bazar",
  'Jessore Airport,	Jashahor',
  'Barisal Airport,	Barisal'
];

const TripOptions = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = {}
    formData['Flying from'] = e.target.elements['Flying From'].value
    formData['Flying to'] = e.target.elements['Flying To'].value
    formData['Deport to'] = e.target.elements[2].value
    formData['Return to'] = e.target.elements[3].value
    formData['Class'] = e.target.elements['Class'].value
    formData['Number of person'] = e.target.elements['Number of person'].value
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className='trip-options'>
      <div className='trip-destinations'>
        <Dropdown name={'Flying From'} values={airports_1}/>
        <Dropdown name={'Flying To'} values={airports_2}/>
      </div>
      <div className='trip-date-class'>
        <DateRangePicker/>
        <TripPerson />
      </div>
      <Button placeholder={'Search Flights'} type={'blue-btn'} width={'236px'}/>
    </form>
  )
}

export default TripOptions