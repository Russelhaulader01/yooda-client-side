import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";

const EditStudent = ({ show, handleClose, handleUpdate, id }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState({})
    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:5000/student/${id}`)
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
                            <input defaultValue={data.name} placeholder='Full Name' {...register("name", { required: true })} /> <br />
                            {errors.name && <span>This field is required</span>}<br />

                            <input defaultValue={data.id} placeholder='Id' {...register("id", { required: true })} /> <br />
                            {errors.id && <span>This field is required</span>}<br />
                           
                            <label >Roll</label><br />
                            <input defaultValue={data.roll} placeholder='Roll' type='number' {...register("roll", { required: true })} /><br />
                            {errors.roll && <span>This field is required</span>}<br />
                            <label >Age</label><br />
                            <input placeholder='Age' defaultValue={data.age} type='number' {...register("age", { required: true })} /><br />
                            {errors.age && <span>This field is required</span>}<br />
                            <label >Class</label><br />
                            <input placeholder='Class' type='number' defaultValue={data.Class}  {...register("Class", { required: true })} /><br />
                            {errors.class && <span>This field is required</span>}<br />
                            <label >Hall</label><br />
                            <input placeholder='Hall' defaultValue={data.hall} {...register("hall", { required: true })} /><br />
                            {errors.hall && <span>This field is required</span>}<br />
                            <label >status</label><br />
                            <select className='w-50' {...register("status", { required: true })}>
                                <option value={data.status}>{data.status}</option>
                                <option value="Active">Active</option>
                                <option value="InActive">inActive</option>
                            </select> <br />
                            {errors.status && <span>This field is required</span>}<br />
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

export default EditStudent;