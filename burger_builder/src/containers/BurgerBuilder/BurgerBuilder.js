import React, { useState } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacone: 0.7
}

const BurgerBuilder = () => {

    const [burgerState, setBurgerState] = useState(
        {
            ingredients: {
                salad: 0,
                bacon: 0,
                meat: 0,
                cheese: 0
            },
            totalPrice: 4
        }
    )

    const addIngredientHandler = (type) => {
        const oldCount = burgerState.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...burgerState.ingredients
        };
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = burgerState.totalPrice;
        const newPrice = oldPrice + priceAddition
        setBurgerState({ingredients: updatedIngredients, totalPrice: newPrice})
    }

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients}/>
            <BuildControls
                ingredientAdded={addIngredientHandler}/>
        </Aux>
    );
};

export default BurgerBuilder