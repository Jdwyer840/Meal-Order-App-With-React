import React from "react";
import Card from "../UI/Card/Card";
import MealsList from "./MealsList/MealsList";
import classes from './Meals.module.css';
import DUMMY_MEALS from "./Data/dummy-meals";

const Meals = () => {
    return (
        <Card className={classes.meals}>
            <MealsList mealItems={DUMMY_MEALS} className={classes['meals-list']}/>
        </Card>
    )
}

export default Meals;
