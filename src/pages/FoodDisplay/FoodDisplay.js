import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import useAuth from '../../hooks/useAuth';
import FoodDisplayItem from './FoodDisplayItem';
const FoodDisplay = () => {
    const [itemsCount, setItemsCount] = useState(1)
    const [foods, setFoods] = useState([])
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    useEffect(() => {
        // call api with search query
        fetch(`https://immense-harbor-44680.herokuapp.com/allFoods?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setItemsCount(Math.ceil(data.items / size))
                setFoods(data.result);
            });
    }, [page]);
    return (
        <div className='mt-5 p-5 boxContainer mx-auto'>
                <Table className=' pt-5' responsive="md">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            foods.map((food, index) => <FoodDisplayItem food={food}/>)
                        }

                    </tbody>
                </Table>
            {
                [...Array(itemsCount).keys()].map(number => <button className={`pagination-btn ${number == page ? 'pagination-selected' : ''}`} onClick={() => setPage(number)}>{number + 1}</button>)
            }
        </div>
    );
};

export default FoodDisplay;