import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {productQuantity, shortenText} from '../helpers/helpers'

import styles from './Card.module.css'

import { TbListDetails } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import {MdDeleteOutline} from "react-icons/md";


function Card({data}) {
    // console.log(data);
    const {id,title,image,price} = data;
    const [state ,dispatch] = useCart();
    // console.log(state);

    const quantity= productQuantity(state,id);
    
    const clickHandler = (type) => {
        dispatch({type , payload : data});
    }
    return (
        <div className={styles.card}>
            <img src={image}/>
            <h3>{shortenText(title)}</h3>
            <p>{price} $ </p>
            <div className={styles.actions}>
                <Link to={`/product/${id}`}><TbListDetails /></Link>
                <div>
                    {quantity === 1 && (<button onClick={() => clickHandler("REMOVE_ITEM")}><MdDeleteOutline /></button>)}
                    {quantity > 1 && (<button onClick={() => clickHandler("DECREASE")}>-</button>)}
                    {!!quantity && <span>{quantity}</span>}
                    {quantity === 0  && (<button onClick={() => clickHandler("ADD_ITEM")}><SlBasket /></button>)}
                    {quantity >= 1 && (<button onClick={() => clickHandler("INCREASE")}>+</button>)} 
                
                </div>
            </div>
        </div>
    );
}

export default Card;