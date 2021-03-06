import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'

const AddFoods = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        axios.post('https://immense-harbor-44680.herokuapp.com/addFoods', data)
            .then(res => {
                if (res.data.acknowledged) {
                    window.alert('Success')
                    reset()
                }
            })
    }
    return (
        <div className='boxContainer text-center'>
            <h5>Add Foods</h5>
            <form className='text-center ' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Food' {...register("name", { required: true })} /> <br />
                {errors.name && <span>This field is required</span>}<br />

                <input placeholder='Id' {...register("id", { required: true })} /> <br />
                {errors.id && <span>This field is required</span>}<br />
                
                <input type='number' placeholder='Price'{...register("price", { required: true })} /><br />
                {errors.price && <span>This field is required</span>}<br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddFoods;