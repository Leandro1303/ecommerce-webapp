import './payment-success.styles.css'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
    return (
      <>
        <h1>Thank you for your purchase!</h1>
          <Link to= "http://localhost:5173/shop" className='home-button'>
              Keep shopping
          </Link>
        </>
    )
}

export default PaymentSuccess;