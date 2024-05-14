import React, {useState, useContext} from 'react';
import CartIcon from "../../UI/CartIcon";
import classes from './MiniCart.module.css';
import Modal from "../../UI/Modal/Modal";

import CartContext from "../../../Store/cart-context";

const Badge = () => {
    return (
      <span className={classes.badge}>0</span>
    );
}

const MiniCart = (props) => {
    const [showModal, setShowModal] = useState(false);
    const ctx = useContext(CartContext);

    const numberOfItems = ctx.items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0)

    const onClickHandler = () => {
        setShowModal(true);
    }
    const hideModalHandler = () => {
        setShowModal(false);
    }



    let wtf = '';
    if (showModal) {
        wtf = <Modal onConfirm={hideModalHandler}/>;
    }

   return (
       <React.Fragment>
           <button onClick={onClickHandler} className={`${classes.button} ${classes.bump}`}>
                <CartIcon className={classes.icon} /> Your Cart<span className={classes.badge}>{+numberOfItems}</span>
            </button>
           {wtf}
       </React.Fragment>
   );
}

export default MiniCart;