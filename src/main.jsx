import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import App from './App.jsx';
import './index.css';

import ProductsProvider from './context/productsContext.jsx';

const rootElement = document.getElementById('root');
const  root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
)

