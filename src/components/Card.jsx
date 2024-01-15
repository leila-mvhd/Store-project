import React from 'react';
import { Link } from 'react-router-dom';
import {shortenText} from '../helpers/helpers'

import styles from './Card.module.css'

import { TbListDetails } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";


function Card({data}) {
    // console.log(data);
    const {id,title,image,price} = data
    return (
        <div className={styles.card}>
            <img src={image}/>
            <h3>{shortenText(title)}</h3>
            <p>{price} $ </p>
            <div className={styles.actions}>
                <Link to={`/product/${id}`}><TbListDetails /></Link>
                <SlBasket />
            </div>
        </div>
    );
}

export default Card;