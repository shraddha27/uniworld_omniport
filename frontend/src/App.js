import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>E-commerce Website</h1>
      <ProductList />
      <Cart />
      <Checkout />
    </div>
  </Provider>
);

export default App;
