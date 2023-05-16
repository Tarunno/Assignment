import './style.scss'

const Footer = () => {
  return (
    <div class='footer'>
      <div>
        <section className='sec-1'>
          <p className='sec-heading'>BD Office Address</p>
          <ul>
            <li>+8801XXXXXXXX</li>
            <li>+8801XXXXXXXX</li>
            <li>Dhaka Tower, L XX, XX Topkhana Rd, Purana Paltan, Dhaka XX</li>
          </ul>
        </section>
        <section className='sec-2'>
          <p className='sec-heading'>USA Office Address</p>
          <ul>
            <li>+1 470 XXXXXX(USA)</li>
            <li>+1 470 XXXXXX(USA)</li>
            <li>USA Address: XXX Arbor Creek Ln, Doraville, GA XXXX</li>
          </ul>
        </section>
        <section className='sec-3'>
          <p className='sec-heading'>Social Media</p>
          <ul>
            <li className='social-icons'>
              <img src='./icons/Facebook.png' />
              <img src='./icons/Twitter.png' />
              <img src='./icons/Imo.png' />
              <img src='./icons/Whatsapp_2.png' />
              <img src='./icons/Insta.png' />
            </li>
            <li>XYZ@gmail.com</li>
            <li>www.XYZ.com</li>
          </ul>
        </section>
        <section className='sec-4'>
          <p className='sec-heading'>Help</p>
          <ul>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Footer