import './checkout-address.css'

const CheckoutAddress = () => {
  const address1 = "2040 St 500W";
  const address2 = "Apt 2030";
  const city = "Miami";
  const zipcode = "31031";
  const phone = "313-890-1234";

  return (
    <div>
      <h2 className="shipping-address">Shipping Address</h2>
      <div className="checkout-container">
        <input className="field" type="text" placeholder="Address" value={address1}></input>
        <input className="field" type="text" placeholder="Address 2" value={address2}></input>
        <input className="field" type="text" placeholder="Zip Code" value={zipcode}></input>
        <input className="field" type="text" placeholder="City" value={city}></input>
        <input className="field" type="text" placeholder="Phone" value={phone}></input>
      </div>
    </div>
  );
}

export default CheckoutAddress