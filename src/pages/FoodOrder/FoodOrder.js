import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './foodOrder.css';

const FoodOrder = () => {
    const { id } = useParams();
    const [food, setFood] = useState({})
    const shiftRef = useRef()
    const dateRef = useRef()
    const rollRef = useRef()
    useEffect(() => {
        console.log(id);
        fetch(`https://immense-harbor-44680.herokuapp.com/food/${id}`)
            .then(res => res.json())
            .then(data => {
                setFood(data)
                console.log(data);
            });
    }, [])
    const handleConfirm = (e) => {
        e.preventDefault()
        console.log(shiftRef.current.value);
        console.log(dateRef.current.value);
        console.log(rollRef.current.value);

        const data = {
            shift: shiftRef.current.value,
            date: dateRef.current.value,
            roll: rollRef.current.value,
            food: food.name
        }
        console.log(data);
        axios.post('https://immense-harbor-44680.herokuapp.com/addOrder', data)
            .then(res => {
                    e.target.reset()
                window.alert('Success')
            })

    }
    return (
        <div className='text-center mx-auto boxContainer foodOrderContainer '>
            <h3>Food Name : {food?.name}</h3>
            <h5>Food Price : {food?.price}</h5>
            <hr />
            <form onSubmit={handleConfirm}>
                <label> Your Student Id</label> <br />
                <input placeholder='Student Roll' required ref={rollRef} /><br />
                <label>Select Shift</label><br />
                <select required ref={shiftRef} >
                    <option value="morning">Morning</option>
                    <option value="noon">Noon</option>
                    <option value="night">Night</option>
                </select> <br />
                <label> Select Date</label> <br />
                <input required ref={dateRef} type="date" /><br />

                <button className='btn btn-secondary my-2' type='submit'>Confirm Order</button>
            </form>
        </div>
    );
};

export default FoodOrder;