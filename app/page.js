import './page.scss'
import Packages from './components/Packages/Packges'
import Carosuel from './components/Carosuel/Carosuel'

const Home = () => {

  const places = [
    {
      id: 1,
      name: 'Shylet',
      cost: 3000,
      img: './places/Shylet.png'
    },
    {
      id: 2,
      name: 'Saint Martin',
      cost: 7500,
      img: './places/Saint martin.png'
    },
    {
      id: 3,
      name: 'Sunderban',
      cost: 4000,
      img: './places/Sundarban.png'
    },
    {
      id: 4,
      name: 'Shajek',
      cost: 6500,
      img: './places/Shajek.jpg'
    }
  ]

  return (
    <div className='home'>
      <div className='packages-section'>
        <h1>Welcome to Ghuronti! Find Flights, Hotels & Tour Packages</h1>
        <Packages />
      </div>

      <div className='places'>
        <h1>Best Places To Visit In Bangladesh</h1>
        <div className='slider-section'>
        <p className='hero-text'>Bangladesh is a South Asian country with a rich cultural heritage and natural beauty.
           It is home to the world's largest mangrove forest,  culture, and natural beauty.</p>
          <div className='hero-card'>
            <img src='./places/Coxs bazar.png'/>
            <div className='info'>
              <p>Cox's Bazar</p>
              <p>15000Tk</p>
              </div>
          </div>
          <Carosuel items={places}/>
        </div>
      </div>

      <div className='banner'>
        <img src='./Banner.png'/>
      </div>

      <div className='mission-vision'>
        <h1>Our Mission &  Vision</h1>
        <p>Serving our customer, searching their entire satisfaction and 
          providing touristic services of quality, committing to the 
          social, cultural and environmental reality of our country.</p>
          <div className='mission-vision-cards'>
            <div className='left-card' id="card-content">
              <h2>Mission</h2>
              <div>
                <p>
                  Providing advanced travel solutions with great care and satisfaction.
                </p>
              </div>
            </div>
            <div className='right-card' id="card-content">
              <h2>Vision</h2>
              <div>
                <p>
                  <span style={{color:'#4AB449'}}> Ghurtoni.com </span>is partnering with you to reach your dream destinations.
                </p>
              </div>
            </div>
          </div>
      </div>

      <div className='customer-review'>
        <h1>Customer satisfaction is our top priority</h1>
        <p>Our clients praise us for our great results, 
          personable service, expert knowledge. Here are what just a few of them had to say</p>
          <div className='review-slider'>
            <div className='review-card'>
              <img src='./Quote.png' />
              <p className='review'>
                Your thoughtfulness and support of Ghuronti is very much appreciated. You are a very dear friend to the Chamber, 
                and I want to assure you that your confidence in Ghuronti will be justified.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home