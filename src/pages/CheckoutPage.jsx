import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import emptyCart from "../assets/shopping-cart.png";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

import styles from "./CheckoutPage.module.css";

function CheckoutPage(props) {
  const [state, dispatch] = useCart();
  console.log(state);
  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return <div className={styles.emptycontainer} style={{textAlign:"center"}}>
        <h3>Your cart is empty!</h3>
        <img src={emptyCart} ></img>
        <Link to="/products">Back to Shop</Link>
    </div>;
  }

  return (
    <div className={styles.container}>
       <BasketSidebar state={state} clickHandler={clickHandler}/>
    <div className={styles.products}>
      {state.selectedItems.map((product) => (
        <BasketCard
          key={product.id}
          data={product}
          clickHandler={clickHandler}
        />
      ))}
    </div>
    </div>
  );
}

export default CheckoutPage;
