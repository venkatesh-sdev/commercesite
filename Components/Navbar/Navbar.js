import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import { useStateContext } from "../../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.Navbar}>
        <Link href="/" className={styles.Logo}>
          ShopV
        </Link>
        <button className={styles.cartItems} onClick={() => setShowCart(true)}>
          <AiOutlineShoppingCart />
          <span>
            {totalQuantities}
          </span>
        </button>
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
