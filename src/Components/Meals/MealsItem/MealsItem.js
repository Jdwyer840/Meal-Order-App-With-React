import React from "react";
import classes from './MealsItem.module.css';
import Card from "../../UI/Card/Card";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
    return (
        <React.Fragment>
            <div className={classes.meal} >
                <div>
                    <h3>{props.name}</h3>
                    <span className={classes.description}>{props.description}</span>
                <p className={classes.price}>{props.price}</p>
                </div>
                <MealsItemForm mealItem={props.mealItem} />
            </div>
        </React.Fragment>

    );
}

export default MealsItem;