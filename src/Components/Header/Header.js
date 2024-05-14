import React from "react";
import Navigation from "./Navigation";
import classes from './Header.module.css';
import meals from '../../Images/meals.jpg';
import Modal from "../UI/Modal/Modal";
const Header = (props) => {
    return (
        <React.Fragment>
            {/*<Modal />*/}
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <Navigation />
            </header>
            <div className={classes['main-image']}>
                <img  src={meals} alt="logo" />
            </div>
        </React.Fragment>

    );
}

export default Header;
