import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'

const AddStudents = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addStudents', data)
            .then(res => {
                if (res.data.acknowledged) {
                    window.alert('Success')
                    reset()
                }
            })
    }
    return (

        <div>
            <h5>Add Students</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Full Name' {...register("name", { required: true })} /> <br />
                {errors.name && <span>This field is required</span>}<br />
               
                <input placeholder='Id' {...register("id", { required: true })} /> <br />
                {errors.id && <span>This field is required</span>}<br />

                <input placeholder='Roll' type='number' {...register("roll", { required: true })} /><br />
                {errors.roll && <span>This field is required</span>}<br />

                <input placeholder='Age' type='number' {...register("age", { required: true })} /><br />
                {errors.age && <span>This field is required</span>}<br />

                <input placeholder='Class' type='number' {...register("Class", { required: true })} /><br />
                {errors.class && <span>This field is required</span>}<br />

                <input placeholder='Hall' {...register("hall", { required: true })} /><br />
                {errors.hall && <span>This field is required</span>}<br />

                <select className='w-50' {...register("status", { required: true })}>
                    <option value="">Status</option>
                    <option value="Active">Active</option>
                    <option value="InActive">inActive</option>
                </select> <br />
                {errors.status && <span>This field is required</span>}<br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddStudents;