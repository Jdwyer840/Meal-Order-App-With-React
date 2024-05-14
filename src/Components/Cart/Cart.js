import React, {useContext, useEffect, useState} from 'react';
import classes from './Cart.module.css';
import CartItem from "../CartItem/CartItem";
import CartContext from "../../Store/cart-context";
import DUMMY_MEALS from "../Meals/Data/dummy-meals";


const Cart = (props) => {
    const ctx = useContext(CartContext);
    const totalAmount = ctx.totalAmount.toFixed(2);

    const onAddToCartHandler = (item) => {
        let updatedItem = {...item, amount: 1};
        ctx.addItem(updatedItem);
    }

    const onRemoveFromCartHandler = (id) => {
        ctx.removeItem(id);
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
        {ctx.items.map(cartItem => {
                return (
                    <CartItem
                        name={cartItem.name}
                        amount={cartItem.amount}
                        price={cartItem.price}
                        id={cartItem.id}
                        meal={cartItem}
                        onAdd={onAddToCartHandler.bind(null, cartItem)}
                        onRemove={onRemoveFromCartHandler.bind(null, cartItem.id)}
                    />
                )
            })}
        </ul>

    )

    return (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{+totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onConfirm} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order!</button>
            </div>
        </React.Fragment>
    );
};


export default Cart;
