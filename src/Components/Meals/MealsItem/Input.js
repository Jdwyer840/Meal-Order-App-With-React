import classes from './Input.module.css';
import React from "react";
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.for}>Amount</label>
            <input
                ref={ref}
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onKeyUp={props.onKeyDown}
                onPaste={props.onKeyDown}
                min={0}
            />
        </div>
    );
});

export default Input;
