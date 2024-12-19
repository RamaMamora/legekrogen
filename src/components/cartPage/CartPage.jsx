import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "./cartPage.module.css";

const CartPage = () => {
  const [cart, setCart] = useLocalStorage("Cart", []); // Hent kurv fra localStorage
  const [total, setTotal] = useState(0); // Samlet pris

  // Beregn samlet pris
  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0), 0);
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [cart]); // Beregn igen, når cart ændres

  // Fjern produkt fra kurven
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };

  return (
    <div className={styles.cartPage}>
      {cart.length === 0 ? (
        <p>Din kurv er tom!</p>
      ) : (
        <div className={styles.cartListContainer}>
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li key={item._id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.cartInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.price} kr</p>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className={styles.removeButton}
                  >
                    Fjern
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <h2>I alt {total} kr</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
