import { shortenText } from "../helpers/helpers";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./BasketCard.module.css";

function BasketCard({ data, clickHandler }) {

  // const { title, image, quantity } = data;

  return (
    <div className={styles.card}>
      <img src={data.image} width="100px"></img>
      <p>{shortenText(data.title)}</p>
      <div className={styles.actions}>
        {data.quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>
            <span>-</span>
          </button>
        )}
        {data.quantity && <span>{data.quantity}</span>}
        {data.quantity > 1 && (
          <button onClick={() => clickHandler("INCREASE", data)}>
            <span>+</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default BasketCard;
