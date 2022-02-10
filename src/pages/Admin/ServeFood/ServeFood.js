import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const ServeFood = () => {
    const [student, setStudent] = useState({})
    const [selection, setSelection] = useState({})
    const [foodName, setFoodName] = useState({})
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/allFoodsName`)
            .then(res => res.json())
            .then(data => {
                setFoodName(data)
               console.log(data);
            });
    }, [])

    const handleSearch = (selection) => {
        console.log(selection);
        fetch(`http://localhost:5000/roll/${selection.roll}`)
            .then(res => res.json())
            .then(data => {
                setStudent(data)
                setSelection(selection)
            });
    }

    const onSubmit = data => {
        console.log(data);

        // axios.post('http://localhost:5000/addServe', data)
        //     .then(res => {
        //         if (res.data.acknowledged) {
        //             window.alert('Success')
        //             reset()
        //         }
        //     })
    }
    return (
        <div>
            <h3>Serve food</h3>
            <form onSubmit={handleSubmit(handleSearch)}>
                <input className='w-25' placeholder='Roll'{...register("roll", { required: true })} />

                <input className='w-25' type='date' {...register("date", { required: true })} />

                <select className='w-25' {...register("shift", { required: true })}>
                    <option value="">Shift</option>
                    <option value="Morning">Morning</option>
                    <option value="Noon">Noon</option>
                    <option value="Night">Night</option>
                </select>
                <input className='w-25' type="submit" />
            </form>
            {
                student.id &&
                <div>
                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <h5>StudentId : {student.id}</h5>
                            <h5>Name : {student.name}</h5>
                            <h5>Status : {student.status}</h5>
                            <h5>Shift : {selection.shift}</h5>
                            <h5>Date : {selection.date}</h5>
                            <h5 >Food Select :</h5>
                            <select className='w-25' multiple {...register("foods", { required: true })}>

                             {
                                 foodName.map(food=> <option value={food.name}>{food.name}</option>)
                             }

                            </select>

                        </div>

                        <input type="submit" />
                    </form>
                </div>
            }
        </div>
    );
};

export default ServeFood;