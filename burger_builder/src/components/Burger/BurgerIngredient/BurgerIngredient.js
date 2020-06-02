import React from 'react'

import classes from './BurgerIngredient.module.css'

const burgerIngredient = (props) => {

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classed.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classed.Cheese}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classed.Bacon}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classed.Salad}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient
};

export default burgerIngredient


