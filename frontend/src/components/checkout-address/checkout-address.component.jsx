import React from "react"
import './checkout-address.css'


const CheckoutAddress = () => {
  return(
    <div>
      <h2 className="shipping-address">Shipping Address</h2>
      <div className="checkout-container">
        <input className="field" type="text" placeholder="Address"></input>
        <input className="field" type="text" placeholder="Address 2"></input>
        <input className="field" type="text" placeholder="Zip Code"></input>
        <input className="field" type="text" placeholder="City"></input>
        <input className="field" type="text" placeholder="Phone"></input>
      </div>
    </div>
  )
}

export default CheckoutAddress