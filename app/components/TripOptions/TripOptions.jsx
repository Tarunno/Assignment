import './style.scss'
import Dropdown from '../Dropdown/Dropdown'
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import TripPerson from '../TripPerson/TripPerson';

const airports_1 = [
  'Shah Amanat International Airport,	Chittagong',
  'Osmany International Airport,	Sylhet',
  "Cox's Bazar Airport,	Cox's Bazar",
  'Jessore Airport,	Jashahor',
  'Barisal Airport,	Barisal'
];

const airports_2 = [
  'Hazrat Shahjalal International Airport,	Dhaka',
  'Osmany International Airport,	Sylhet',
  "Cox's Bazar Airport,	Cox's Bazar",
  'Jessore Airport,	Jashahor',
  'Barisal Airport,	Barisal'
];

const TripOptions = () => {

  return (
    <div className='trip-options'>
      <div className='trip-destinations'>
        <Dropdown values={airports_1}/>
        <Dropdown values={airports_2}/>
      </div>
      <div className='trip-date-class'>
        <DateRangePicker/>
        <TripPerson />
      </div>
    </div>
  )
}

export default TripOptions