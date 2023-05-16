import Link from 'next/link'
import './style.scss'
import {AiOutlineSearch} from 'react-icons/ai'
import Button from '../Button/Button'

const Header = () => {
  return <div className='header'>
    <div className='upper-header'>
      <div className='container'>
        <div className='span'>
          <img src="./icons/phone-icon.png" /> 
          <p>+88-01885-XXX-XXX</p>
        </div>
        <p><Link href='#'>Contract Us</Link></p>
      </div>
    </div>

    <div className='lower-header'>
      <div className='container'>
        <div className='logo'>
          <img src='./Logo.png' />
          <p><Link href='#'>About Us</Link></p>
        </div>
        <div className='rest'>
          <div className='search-bar'>
            <input type="text" placeholder='Search Flight, Hotal, Visa'/>
            <AiOutlineSearch size={25} color={'#092E3D80'}/>
          </div>
          <Button placeholder={'Log In'} type={'green-btn'}/>
          <Button placeholder={'Sign Up'} type={'blue-btn'}/>
        </div>
      </div>
    </div>
    <div className="showcase">
      <img src='./Showcase.png' />
      <div className='gradient'></div>
    </div>
  </div>
}

export default Header