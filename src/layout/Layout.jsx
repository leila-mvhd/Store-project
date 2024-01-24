import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "../context/CartContext";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products" >LMVHDShop</Link>
        <div>
          <Link to="/checkout" className={styles.shopping_btn}>
            <LuShoppingCart />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by LMVHD</p>
      </footer>
    </>
  );
}

export default Layout;
