import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import FootItems from './FootItems';
import axios from 'axios';
import EditFood from './EditFood';
import useAuth from '../../hooks/useAuth';
const AllFoods = () => {
    const [itemsCount, setItemsCount] = useState(1)
    const [foods, setFoods] = useState([])
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [editData, setEdit] = useState({})
    const [show, setShow] = useState(false);
    useEffect(() => {
        // call api with search query
        fetch(`https://immense-harbor-44680.herokuapp.com/allFoods?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setItemsCount(Math.ceil(data.items / size))
                setFoods(data.result);
            });
    }, [page]);
    const handleClose = () => setShow(false);

    const handleEditShow = (id, index) => {
        setEdit(id)
        setShow(true);

    }

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you suer?')
        if (confirm) {
            axios.post('https://immense-harbor-44680.herokuapp.com/foodDelete', { id })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restStudents = foods.filter(food => food._id !== id);
                        setFoods(restStudents);
                    }
                })
        }

    }

    const handleUpdate = (data) => {
        console.log(data);
        axios.post('https://immense-harbor-44680.herokuapp.com/foodUpdate', data)
            .then(res => {
                if (res.data.acknowledged) {
                    const restItems = foods.map(item => {
                        if ((item._id === data._id)) {
                            console.log(item);
                            return {
                                name: data.name,
                                price: data.price,
                                id:data.id,
                                _id:data._id
                            }
                        } else {
                            console.log(data);
                            console.log(item);
                            return item
                        }

                    })
                    console.log(restItems);
                    setFoods(restItems)
                    setShow(false);
                   
                }
            })
    }
    
    return (
        <div>
            <h4>All Foods</h4>
                <Table responsive="md">
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
                            foods.map((food, index) => <FootItems
                                handleEditShow={handleEditShow}
                                handleDelete={handleDelete}
                                index={index}
                                data={food}
                                key={food._id}
                            />)
                        }

                    </tbody>
                </Table>
            {
                [...Array(itemsCount).keys()].map(number => <button className={`pagination-btn ${number == page ? 'pagination-selected' : ''}`} onClick={() => setPage(number)}>{number + 1}</button>)
            }
            {show && <EditFood
                id={editData}
                handleClose={handleClose}
                show={show}
                handleUpdate={handleUpdate}
            />}
        </div>
    );
};

export default AllFoods;