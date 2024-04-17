import { Link } from 'react-router-dom'

import './payment-success.styles.css'

const PaymentSuccess = () => {
  return (
    <>
      <h1>Thank you for your purchase!</h1>
      <Link to="/shop" className='home-button'>
        Keep shopping
      </Link>
    </>
  )
}

export default PaymentSuccess;