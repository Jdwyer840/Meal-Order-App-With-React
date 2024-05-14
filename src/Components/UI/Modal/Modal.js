import React, {useContext} from "react";
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Card from "../Card/Card";
import Cart from "../../Cart/Cart";
import CartContext from "../../../Store/cart-context";


const Backdrop = (props) => {
    const onClickHandler = () => {
        props.onConfirm();
    }
    return <div onClick={props.onConfirm} className={classes.backdrop} ></div>
}

const ModalCartOverlay = (props) => {
    const ctx = useContext(CartContext);

    return (
        <Card className={classes.modal}>
            <header >
                <h2>Your Cart</h2>
            </header>
            <Cart onConfirm={props.onConfirm} />
            <footer >
                Eat Da FOOOOOD
            </footer>
        </Card>
    )
}

const Modal = (props) => {
    const ctx = useContext(CartContext);

            return (
                <React.Fragment>
                    <React.Fragment>
                            {
                                ReactDOM.createPortal(
                                    <Backdrop onConfirm={props.onConfirm}/>,
                                    document.getElementById('backdrop-root')
                                )
                            }
                        {ReactDOM.createPortal(
                            <ModalCartOverlay
                            onConfirm={props.onConfirm}
                            />,
                            document.getElementById('overlay-root')
                            )}
                    </React.Fragment>
                </React.Fragment>

            );
};

export default Modal;
