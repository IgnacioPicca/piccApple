import React from 'react';
import { useState } from 'react';
import './itemCount.css';


const ItemCount = ({ start, stock, addToCart }) => {

    const [cant, setCant] = useState(start);

    const addItem = (num) => {
        if (stock > cant) {
            setCant(cant + num);
        }
    };

    return (

        <div className="countContainer">

            <div className="countContainer__contador">

                <button className="cardDetail_details_cart" onClick={() => addToCart(cant)} disabled={cant === start}>ADD TO CART</button>

                <button
                    className="count-container__button"
                    onClick={() => addItem(-1)}
                    disabled={cant === start}
                >
                    -
                </button>
                <span className="count-container__cant">{cant}</span>
                <button
                    className="count-container__button"
                    onClick={() => addItem(+1)}
                    disabled={cant === stock}
                >
                    +
                </button>
            </div>

        </div>
    );
};

export default ItemCount;