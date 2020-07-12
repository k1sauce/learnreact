import React, { useState } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const BurgerBuilder = () => {

    const [burgerState, setBurgerState] = useState(
        {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false
        }
    )

    const updatePurchaseState = (ingredients) => {
        
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        
        return sum > 0
    }

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
        const updatedPurchasable = updatePurchaseState(updatedIngredients)
        setBurgerState({
            ingredients: updatedIngredients, 
            totalPrice: newPrice, 
            purchasable: updatedPurchasable});
    }

    const removeIngredientHandler = (type) => {
        const oldCount = burgerState.ingredients[type];
        if (oldCount <= 0) {
            return;
        } 
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...burgerState.ingredients
        };
        updatedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = burgerState.totalPrice;
        const newPrice = oldPrice - priceDeduction
        const updatedPurchasable = updatePurchaseState(updatedIngredients)
        setBurgerState({
            ingredients: updatedIngredients, 
            totalPrice: newPrice, 
            purchasable: updatedPurchasable});

    }

    let disabledInfo = {
        ...burgerState.ingredients
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    };

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients}/>
            <BuildControls
                price={burgerState.totalPrice}
                purchasable={burgerState.purchasable}
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabled={disabledInfo}/>
        </Aux>
    );
};

export default BurgerBuilder