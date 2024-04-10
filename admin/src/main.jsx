import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { ModalProvider } from "./context/modal-provider.cotext.jsx";
import ProtectedRoute from "./rutas/private-route/protected-route.component.jsx";
import Authentication from "./rutas/authentication/authentication.component.jsx";
import ErrorPage from "./rutas/error/error.component.jsx";
import { Provider } from 'react-redux'
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Authentication />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
