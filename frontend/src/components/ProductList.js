import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import products from '../products.json';

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const categorizedProducts = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(categorizedProducts).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {categorizedProducts[category].map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
