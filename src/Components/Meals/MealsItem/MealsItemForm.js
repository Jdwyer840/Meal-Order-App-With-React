import classes from './MealsItemForm.module.css'
import Button from "../../UI/Button/Button";
import Input from "./Input";
import {useContext, useRef, useState} from "react";
import CartContext from "../../../Store/cart-context";

const MealsItemForm = (props) => {
    const ctx = useContext(CartContext);
    const [enteredAmount, setEnteredAmount] = useState(0);
    // const price = `$${props.mealItem.price.toFixed(2)}`;
    const amountInputRef = useRef();

    const onAddToCartHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        let item = {...props.mealItem, amount: enteredAmountNumber};
        ctx.addItem(item);
        amountInputRef.current.value = 0;
    }

    const onChangeHandler = (event) => {
        processInputValue(event)
    };

    const onKeyDownHandler = (event) => {
        processInputValue(event)
    };

    const processInputValue = (event) => {
        event.preventDefault();
        let value = event.target.value;

        setEnteredAmount(value < 0 ? 0 : value);
    }

    return (
        <form onSubmit={onAddToCartHandler} className={classes.form}>
            <Input
                value={enteredAmount.value}
                onChange={onChangeHandler}
                onKeyUp={onKeyDownHandler}
                type="number"
                for={`amount-${props.mealID}`}
                id={`amount-${props.mealID}`}
                mealID={props.mealID}
                ref={amountInputRef}
            />
            <button type='submit'>Add</button>
        </form>
    );
}

export default MealsItemForm;
