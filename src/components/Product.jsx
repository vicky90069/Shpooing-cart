import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { add, remove } from '../redux/Slices/CartSlice'; 
import { toast } from 'react-hot-toast';


const Product = ({ post }) => {
  const [selected, setSelected] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch(); // Getting dispatch function from react-redux
  
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Items added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id)); 
    toast.error("Item removed from Cart");
  }

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={post.img} alt="Product" />
      </div>

      <div>{post.price}</div>
      
      {cart.some(p => p.id === post.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
