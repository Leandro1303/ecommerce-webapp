import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils.js';
import { StyleSheetManager } from 'styled-components';
import App from './App.jsx'

import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyleSheetManager shouldForwardProp={(prop) => !['shrink', 'image_url'].includes(prop)}>
          <BrowserRouter>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </BrowserRouter>
        </StyleSheetManager>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
