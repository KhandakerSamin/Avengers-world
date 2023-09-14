/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({ selectedActors, remaining , totalCost ,budget}) => {
    return (
        <div>
            <div className='cart-div-1'>
            <h3>Total Actors: {selectedActors.length}</h3>
            <h4>Total Budget : {budget}</h4>
            <h4>Total Cost: {totalCost}</h4>
            <h4>Remaining: {remaining}</h4>
            </div>
            <div className='cart-div-2'>
                <h3>Selected Heros:</h3>
            {selectedActors.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </div>
        </div>
    );
};

export default Cart;