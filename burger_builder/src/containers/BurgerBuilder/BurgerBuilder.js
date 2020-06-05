import React, { useState } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

const BurgerBuilder = () => {

    const [burgerState, setBurgerState] = useState(
        {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2
            }
        }
    )

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients}/>
            <div>Build Controls</div>
        </Aux>
    );
};

export default BurgerBuilder