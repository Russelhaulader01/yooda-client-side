import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodOrder = () => {
    const { id } = useParams();
    const [food, setFood] = useState({})
    const shiftRef = useRef()
    const dateRef = useRef()
    const idRef = useRef()
    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:5000/food/${id}`)
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
        console.log(idRef.current.value);
        console.log(food.id);
        
    }
    return (
        <div className='text-center mt-5 pt-5'>
            <h3>Food Name : {food?.name}</h3>
            <h3>Food Price : {food?.price}</h3>
            <form onSubmit={handleConfirm}>
                <label> Your Student Id</label> <br />
                <input placeholder='Student id' required ref={idRef} type="stuId" /><br />
                <label>Select Shift</label><br />
                <select required ref={shiftRef} >
                    <option value="morning">Morning</option>
                    <option value="noon">Noon</option>
                    <option value="night">Night</option>
                </select> <br />
                <label> Select Date</label> <br />
                <input required ref={dateRef} type="date" /><br />

                <button type='submit'>Confirm Order</button>
            </form>
        </div>
    );
};

export default FoodOrder;