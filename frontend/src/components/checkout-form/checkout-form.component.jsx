import { useDispatch } from 'react-redux';

const CheckoutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <div>
      Checkout Form
    </div>
  );
}


export default CheckoutForm;