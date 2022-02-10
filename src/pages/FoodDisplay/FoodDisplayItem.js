import React from 'react';
import { Link } from 'react-router-dom';

const FoodDisplayItem = (props) => {
    const { id, name, price,_id } = props.food
    console.log(props.food);
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td> <Link to={`/order/${_id}`}> <button>Order Now</button></Link></td>
        </tr>
    );
};

export default FoodDisplayItem;