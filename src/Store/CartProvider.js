import React, {useState, useEffect, useReducer} from 'react';
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        let newTotalAmount = state.totalAmount + action.item.amount * action.item.price;
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.item.id;
        });

        let existingCartItem;
        let updatedCartItems;
        if (existingCartItemIndex !== null || existingCartItemIndex !== undefined) {
            existingCartItem = state.items[existingCartItemIndex];
        }

        if (existingCartItem) { //hopefully if not initialized it will skip this
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount};
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedItem;

        } else {
          updatedCartItems = state.items.concat(action.item);
        }

        return {
            items: updatedCartItems,
            totalAmount: newTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        // we are only going to be able to remove one at a time.
        let newTotalAmount; //= state.totalAmount - (action.item.price);
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.id;
        });

        let existingCartItem;
        let updatedCartItems;

        if (existingCartItemIndex !== null || existingCartItemIndex !== undefined) {
            existingCartItem = state.items[existingCartItemIndex];
        }
        if (!existingCartItem) {
            updatedCartItems = state.items;
            newTotalAmount = state.totalAmount;
            console.log("uh ohhh")
            return {
                items: updatedCartItems,
                totalAmount: newTotalAmount
            }
        }
        let updatedCartItem;
        if (existingCartItem.amount === 1) {
            updatedCartItems = state.items.filter(item => item.id !== action.id);
        } else {
            updatedCartItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            updatedCartItems = [...state.items];

            updatedCartItems[existingCartItemIndex] = updatedCartItem;
        }

        newTotalAmount = state.totalAmount - (existingCartItem.price);

        return {
            totalAmount: newTotalAmount,
            items: updatedCartItems
        }

    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState); //dk if need 3rd arg or not


    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item});
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider
            value={cartContext}
        >
            {props.children}
        </CartContext.Provider>
    );

}

export default CartProvider;