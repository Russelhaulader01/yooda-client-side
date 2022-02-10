import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const ServeFood = () => {
    const [student, setStudent] = useState({})
    const [selection, setSelection] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
        setSelection(data);
        axios.post('https://immense-harbor-44680.herokuapp.com/filterOrder', data)
            .then(res => {
                console.log(res.data);
                if (res.data.name) {
                    setStudent(res.data);
                }else{
                    window.alert('Student Not Exist');
                }
              
            })
    }

    const handleServed = () => {
        const data = {
            roll: selection.roll,
            shift: selection.shift,
            date: selection.date
        }
        console.log(data);

        axios.post('https://immense-harbor-44680.herokuapp.com/servedFood', data)
            .then(res => {
                console.log(res.data);
                window.alert('Success')
                setStudent(res.data)
            })
    }
    return (
        <div>
            <h3>Serve food</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='w-25' placeholder='Roll'{...register("roll", { required: true })} />
                <input className='w-25' type='date' {...register("date", { required: true })} />
                <select className='w-25' {...register("shift", { required: true })}>
                    <option value="">Shift</option>
                    <option value="morning">Morning</option>
                    <option value="noon">Noon</option>
                    <option value="night">Night</option>
                </select>
                <input className='w-25' type="submit" />
            </form>
            {
                student.id &&
                <div >
                    <div className='mt-5 boxContainer'>
                        <h5>Roll : {student.roll}</h5>
                        <h5>Name : {student.name}</h5>
                        <h5>Status : {student.status}</h5>
                        {
                            student?.shift ?
                                <>
                                    <h5>Shift : {student.shift}</h5>
                                    <h5>Date : {student.date}</h5>
                                    <h5> Selected Food :
                                        {
                                            student.food.map(item => ` ${item}, `)
                                        }
                                    </h5>
                                </> : <h4 className='text-danger'>This student has not yet choose any meals for this shift and date! Please Inform him/her to select some food .</h4>
                        }
                    </div>
                    {student?.servedStatus ?
                        <h3 className='text-info'>Already Served</h3>
                        :
                        <button onClick={handleServed}>Served</button>}
                </div>
            }
        </div>
    );
};

export default ServeFood;