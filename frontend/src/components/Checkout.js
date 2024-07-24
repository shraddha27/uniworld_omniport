import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkout } from '../redux/actions';

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCheckout = async () => {
    
    const user = { name, email };
    const order = { user, cart };


     try {
      const response = await fetch('/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user, order}),
      });

      if (response.ok) {
        // Handle successful order placement
        console.log('Order placed successfully');
      } else {
        // Handle errors
        console.error('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
    }  
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button onClick={handleCheckout}>Submit Order</button>
      </div>
      <div>
        <h3>Order Summary</h3>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.name} - ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
