import React, {useContext} from 'react';
import classes from './CartItem.module.css';
// import CartContext from "../../Store/cart-context";

const CartItem = (props) => {
    // const ctx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const onAddToCartHandler = () => {
        props.onAdd(props.meal);
    }

    const onRemoveFromCartHandler = () => {
        props.onRemove(props.id);
    }

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={onAddToCartHandler}>+</button>
                <button onClick={onRemoveFromCartHandler}>-</button>
            </div>
        </li>
    );
};

export default CartItem;
