import { useState, useEffect } from "react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  //simulate API Call
  const fetchShoppingCart = async () => {
    return new Promise((resolve) => {
      resolve([
        { id: 1, name: "Apple", price: 0.99, quantity: 0 },
        { id: 2, name: "Banana", price: 3.99, quantity: 0 },
        { id: 3, name: "Orange", price: 2.99, quantity: 0 },
        { id: 4, name: "Mango", price: 1.99, quantity: 0 },
      ]);
    });
  };

  //load data
  useEffect(() => {
    const getCartItems = async () => {
      const res = await fetchShoppingCart();
      setCartItems(res);
    };
    getCartItems();
  }, []);

  //handle quantity changes
  const handleIncrement = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  
  const handleDecrement = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleEmptyCart = () => {
    setCartItems((items) => items.map(item => ({...item, quantity:0})))
  }

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div>
      <h2>ShoppingCart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({id, name, price, quantity})=>(
            <tr key={id}>
              <td>{name}</td>
              <td>${price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleDecrement(id)}>-</button>
                {quantity}
                <button onClick={() => handleIncrement(id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Price: ${total.toFixed(2)}</h3>
      <button>Check Out</button>
      <button onClick={handleEmptyCart}>Empty Cart</button>
    </div>
  );
}
