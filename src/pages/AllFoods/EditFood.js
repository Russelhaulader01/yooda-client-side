import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";

const EditFood = ({ show, handleClose, handleUpdate, id }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState({})
    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:5000/food/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            });
    }, [])
    return (
        <div>
            {data.name &&
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <Modal.Header closeButton>
                            <Modal.Title>{data.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label >Name</label><br />
                            <input defaultValue={data.name} placeholder='Name' {...register("name", { required: true })} /> <br />
                            {errors.name && <span>This field is required</span>}<br />
                            
                            <label >Id</label><br />
                            <input defaultValue={data.id} placeholder='Id' {...register("id", { required: true })} /> <br />
                            {errors.id && <span>This field is required</span>}<br />

                            <label >Price</label><br />
                            <input defaultValue={data.price} placeholder='price' type='number' {...register("price", { required: true })} /><br />
                            {errors.roll && <span>This field is required</span>}<br />
                            
                            <input style={{ visibility: 'hidden' }} placeholder='id' defaultValue={id} {...register("_id")} /><br />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary">Save Changes</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            }
        </div>
    );
};

export default EditFood;