import './style.scss'

const Button = ({placeholder, onClick, type, width}) => {
  return <button onClick={onClick} className={type} style={{width:width}}>
    {placeholder}
  </button>
}

export default Button