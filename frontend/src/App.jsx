import { Route, Routes } from 'react-router-dom'

// COMPONENTS
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Shop from './routes/shop/shop.component'
import Authentication from './routes/authentication/authentication.component'
import Checkout from './routes/checkout/checkout.component'
import Product from './routes/product/product.component'
import Profile from './routes/profile/profile.component'
import Footer from './components/footer/footer.component'

import './App.css'
import PaymentSuccess from './routes/payment-success/payment-success.component'

function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='/product/*' element={<Product />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
