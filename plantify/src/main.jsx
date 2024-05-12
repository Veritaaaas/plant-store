import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Shop from './components/Shop.jsx'
import Product_info from './components/Product_info.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './components/CartContext.jsx' // Import CartProvider

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/shop/:product_display',
    element: <Shop />,
  },
  {
    path: '/shop/:product_display/:product_name',
    element: <Product_info />,
  },
  {
    path: '/cart',
    element: <Cart />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> {/* Wrap RouterProvider with CartProvider */}
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)